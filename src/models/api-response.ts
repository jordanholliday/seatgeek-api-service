import { Event } from "./event";

export interface EventsApiResponse extends ApiResponse {
    events: Event[]
}

export interface ApiResponse {
    meta: {
        "per_page": number;
        "geolocation": string | number;
        page: number;
        took: number;
        total: number;
    }
}