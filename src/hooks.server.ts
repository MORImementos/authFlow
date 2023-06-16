import type { handle, handleFetch } from '@sveltejs/kit';
import { BACKEND } from './lib/constants';


// TODO: add logic for redirecting based on status/jwt presence.
/* handle function is used to intercept all requests, so it will be used to alter and return the response objects from those. I think the primary benefit of it for us will be redirecting, particularly based on things like patrons reaching their community limits, etc. */ 
export const handle = (async ({ event, resolve }) => {
    const response = await resolve(event)
    return response
})


/* handleFetch intercepts fetch requests if you destructure the fetch argument in load/actions on serverside requests. I use this to intercept the request and attach the JWT as header. On all fetch requests to API, check for presence of JWT. If it exists, attach it as Auth header. (**NOTE TO SELF** For handleFetch to work, fetch has to be destructured/included in actions/load functions -- I think since sveltekit is using its own version of fetch) */
export const handleFetch = (async ({ event, request, fetch }) => {
    // get JWT
    const jwt = event.cookies.get('jwt')

    // if request is to API
    if (request.url.startsWith(BACKEND)) {
        // if login, redirect if JWT exists
        if (event.url.pathname.startsWith('/login')) {
            if (jwt) {
                throw redirect(303, '/')
            }
            return fetch(request)
        } else {
            // if not login, set Authorization header
            if (jwt) {
                request.headers.set('Authorization', `Bearer ${jwt}`)
            }
        }
    }

    // return the altered fetch request
    return fetch(request);
}) satisfies HandleFetch;