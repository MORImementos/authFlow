import { z } from 'zod'
import { USERNAME_CHARACTER_LIMIT, PASSWORD_CHARACTER_LIMIT, EMAIL_CHARACTER_LIMIT, COMMUNITY_CHARACTER_LIMIT } from './constants';

/* Zod schemas / module are used because
    a) it is needed to work with superforms
    b) it allows for clean validation for form data / types
    c) you can pick and choose from schema to choose what to include in forms (for example, on login page, I only used Email and Password fields from the User object)
*/

// user validation
export const User = z.object({
    Email: z
        .string({ required_error: 'Email is required' })
        .email({ message: 'Please enter a valid email address' })
        .max(EMAIL_CHARACTER_LIMIT, { message: 'Email is too long' })
        .trim(),
    Password: z
        .string({ required_error: 'Password is required' })
        .min(1, { message: 'Please enter a valid password' })
        .max(PASSWORD_CHARACTER_LIMIT, { message: 'Password is too long' })
        .trim(),
    Username: z
        .string({ required_error: 'Username is required' })
        .min(1, { message: 'Please enter a valid username' })
        .max(USERNAME_CHARACTER_LIMIT, { message: 'Password is too long' })
        .trim()
})

type User = z.infer<typeof User>

// community validation
// TODO: finish this, possibly figure out a more efficient way to set up schema
export const Community = z.object({
    community_name: z
        .string({ required_error: 'Enter a valid community name' })
        .max(COMMUNITY_CHARACTER_LIMIT, { message: 'Community name is too long' })
        .min(1, { message: 'Community name is too short' })
        .trim(),
    type: z
        .enum(["Official", "Unofficial"], { required_error: 'Enter a valid type' }),
})
