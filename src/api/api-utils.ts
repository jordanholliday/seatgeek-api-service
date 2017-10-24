import * as got from "got";

const apiUrl: string = "https://api.seatgeek.com/2/"
const accessToken: string = `client_id=${ process.env.SEATGEEK_READ_KEY }`;

export async function get(
    path: string,
    query: string[] = []
): Promise<string> {
    const queryString: string = [accessToken, ...query].join("&");
    const res = await got(`${ apiUrl }${ path }?${ queryString }`);
    return res.body;
}
