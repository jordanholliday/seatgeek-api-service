import * as express from "express";
import { IncomingMessage, ServerResponse } from "http";
import * as url from "url";
import { getClientIp } from "request-ip";

import { EventsApi } from "./api";
import { Event } from "./models";

const api = new EventsApi();
const server = express();
server.get("", requestHandler).listen(3000);

async function requestHandler(req: IncomingMessage, res: ServerResponse): Promise<void> {
    let events;
    try {
        events = await api.get(getParamsFromRequest(req));
    } catch (e) {
        res.writeHead(500);
        return res.end();
    }
    res.end(JSON.stringify(events));
}

function getParamsFromRequest(req: IncomingMessage): string[] {
    const queryParams = url.parse(req.url!, true).query;
    const ip = getClientIp(req);
    return [
        "per_page=100", 
        `geoip=${ queryParams.geoip || ip || 10000 }`, 
        `lowest_price.lte=${ queryParams.price || 35 }`, 
        "datetime_utc.lte=2017-10-31"
    ];
}