import * as express from "express";
import { IncomingMessage, ServerResponse } from "http";
import * as url from "url";

import { EventsApi } from "./api";
import { Event } from "./models";

express()
	.get("", requestHandler)
	.listen(3000);

async function requestHandler(req: IncomingMessage, res: ServerResponse): Promise<void> {
	const eventsApi = new EventsApi();
    try {
        const response = await eventsApi.get(getParamsFromRequest(req));
		res.end(JSON.stringify(response));
    } catch (e) {
        res.writeHead(500);
        return res.end();
    }
}

function getParamsFromRequest(req: IncomingMessage): string[] {
	const queryParams = url.parse(req.url!, true).query;
	return Object.keys(queryParams).map((key) => `${ getQueryKey(key) }=${ queryParams[key] }`);
}

function getQueryKey(key: string): string {
	switch (key) {
		case "price":
			return "lowest_price.lte";
		case "date":
			return "datetime_utc.lte";
		case "zip":
			return "geoip";
		case "ps":
			return "per_page";
		default:
			return key;
	}
}
