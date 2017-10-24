## Usage
Currently returns only events (not teams, venues, taxonomies, etc). 

All query params pertaining to events described [here](http://platform.seatgeek.com/) should work. For convenience there are several param aliases:
- `date` -> `datetime_utc.lte`
- `price` -> `lowest_price.lte`
- `ps` -> `per_page`
- `zip` -> `geoip`

## Deploy via `now`

First get a SeatGeek read key [here](https://seatgeek.com/account/develop). Then:

```
$   now secrets add seatgeek-read-key YOUR_READ_KEY
$   npm run deploy
```


## Append an partner ID to event urls 

**Optional**. Get a SeatGeek partner ID [here](https://seatgeek.com/partners/dashboard). Then:

```
$   now secrets add seatgeek-aid YOUR_AID
$   npm run deploy:partner
```

