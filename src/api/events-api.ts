import { get } from "./api-utils";

import { Event } from "../models/event";

export class EventsApi {
    async get(query: string[] = []): Promise<Event[]> {
        return get("events", query, (raw: any) => raw.events as Event[]);
    }
}