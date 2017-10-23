import * as got from "got";

const apiUrl: string = "https://api.seatgeek.com/2/"
const accessToken: string = `client_id=${ process.env.SEATGEEK_READ_KEY }`;

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
