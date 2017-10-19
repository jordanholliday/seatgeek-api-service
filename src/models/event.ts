import { EventStats } from "./event-stats";
import { Venue } from "./venue";

export interface Event {
    id: number;
    stats: EventStats;
    venue: Venue;
    title: string;
    url: string;
    datetime_local: string;
    datetime_utc: string;
}

