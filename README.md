> a microservice to proxy the SeatGeek API

### Deploy via `now`

First get a SeatGeek read key [here](https://seatgeek.com/account/develop). Then:

```
$   now secrets add seatgeek-read-key YOUR_READ_KEY
$   npm run deploy
```

### Append an partner ID to event urls 

**Optional**. Get a SeatGeek partner ID [here](https://seatgeek.com/partners/dashboard). Then:

```
$   now secrets add seatgeek-aid YOUR_AID
$   npm run deploy:partner
```

