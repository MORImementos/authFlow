import { STAT_ENDPOINTS, GET } from '../..//lib/constants';
import type { PageServerLoad } from './$types'

// fetch stats on page load
export const load = async ({ fetch }) => {
    const data = await GET(STAT_ENDPOINTS.STATS)
    console.log(data);
    return {data: data}

}