import * as express from "express";
import { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

import { EventsApi } from "./api";
import { Event } from "./models";

const eventsApi = new EventsApi();
const server = express();
server.get("", requestHandler).listen(3000);

async function requestHandler(req: IncomingMessage, res: ServerResponse): Promise<void> {
    let events;
    try {
        events = await eventsApi.get(getParamsFromRequest(req));
    } catch (e) {
        res.writeHead(500);
        return res.end();
    }
    res.end(JSON.stringify(events));
}

function getParamsFromRequest(req: IncomingMessage): string[] {
	const queryParams = url.parse(req.url!, true).query;
	return [
		"per_page=100",
		...Object.keys(queryParams).map((key) => `${ getQueryKey(key) }=${ queryParams[key] }`)
	];
}

function getQueryKey(key: string): string {
	switch (key) {
		case "price":
			return "lowest_price.lte";
		case "date":
			return "datetime_utc.lte";
		default:
			return key;
	}
}
