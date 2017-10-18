import { EventsApi } from "./api";

const api = new EventsApi();
exec();

async function exec(): Promise<void> {
    const events = await api.get(["per_page=100", "geoip=27106", "lowest_price.lte=50", "datetime_utc.lte=2017-10-31"]);
    console.log(events.map(e => [e.title, e.venue.name, e.stats.lowest_price]));
}

