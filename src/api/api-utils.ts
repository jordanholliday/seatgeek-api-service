import * as got from "got";

const apiUrl: string = "https://api.seatgeek.com/2/"
const accessToken: string = "client_id=NTE2MzY1NnwxNTA4Mjg1MjA1LjY3";

export async function get<T>(
    path: string,
    query: string[] = [],
    parser?: (raw: any) => T[] 
): Promise<T[]> {
    const queryString: string = [accessToken, ...query].join("&");
    const res = await got(`${ apiUrl }${ path }?${ queryString }`);
    const out = JSON.parse(res.body);
    return parser != null ? parser(out) : out as T[];
}