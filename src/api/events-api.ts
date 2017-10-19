import { get } from "./api-utils";

import { Event } from "../models/event";

export class EventsApi {
    async get(query: string[] = []): Promise<Event[]> {
		return get("events", query, (raw: any) => prettifyEvents(raw.events as Event[]))
    }
}

function prettifyEvents(events: Event[]): any[] {
	return events
		.map(e => {
			return {
				title: e.title,
				url: e.url,
				datetime: e.datetime_utc,
				venue: e.venue.name,
				city: e.venue.city,
				minPrice: e.stats.lowest_price,
				listingCount: e.stats.listing_count
			}
		})
		.sort((event1, event2) => +event1.minPrice - +event2.minPrice);
}
