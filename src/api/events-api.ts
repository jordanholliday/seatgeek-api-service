import { get } from "./api-utils";

import { Event } from "../models/event";
import { EventsApiResponse } from "../models/api-response";

export class EventsApi {
    async get(query: string[] = []) {
		const out = await get("events", query);
		const response: EventsApiResponse = JSON.parse(out);
		return appendReferralCode(response);
    }
}

function appendReferralCode(res: EventsApiResponse): EventsApiResponse {
	if (process.env.SEATGEEK_AID == null) {
		return res;
	}
	res.events.forEach(event => {
		event.url += `?aid=${ process.env.SEATGEEK_AID }`
	})
	return res;
}
