<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>

# Garduino API

API to track data about plants in your garden. Store data like soil moisture, humidity, light levels and temperature.

## Built With

ExpressJS &amp; MongoDB.

## Deploy

This API is hosted free with `now` and uses a free mongo db with mLab. Now will randomly generate a URL for the API. Have the [now CLI](https://zeit.co/now) and NPM installed before running the below command.

- Step 1: `npm install`
- Step 2: `now -e MONGO_DB=<mongo connection string>`

## How to use

Use an arduino/genuino or raspberry pi to send data to this API. Here are my example scripts for [arduino and raspberry pi](https://github.com/rametta/GarduinoScripts). Then create a front end to read data from the API or clone my front-end that already works for this API.

## Mini Swagger

### Gardens

- GET `/api/gardens` Returns list of gardens
- POST `/api/gardens` Returns newly saved garden
- PUT `/api/gardens` Returns updated garden
- DELETE `/api/gardens` Returns message if deleted garden
- GET `/api/gardens/:id` Returns 1 garden

### Pots

- GET `/api/pots` Returns list of pots
- POST `/api/pots` Returns newly saved pot
- PUT `/api/pots` Returns updated pot
- DELETE `/api/pots` Returns message if deleted pot
- GET `/api/pots/:id` Returns 1 pot
- GET `/api/pots/garden/:id` Returns list of pots for a specific garden

### Readings

- GET `/api/readings` Returns list of readings
- POST `/api/readings` Returns newly saved reading
- PUT `/api/readings` Returns updated readings
- DELETE `/api/readings` Returns message if deleted reading
- GET `/api/readings/:id` Returns 1 reading
- GET `/api/readings/pot/:id` Returns list of readings for a specific pot

## Schemas

### Garden

- name `String` required
- description `String`

### Pot

- name `String` required
- description `String`
- gardenId `String` required

### Reading

- date `Date` default = Date.now
- potId `String` required
- soilTemp `Float`
- soilMoisture `Float`
- humidity `Float`
- light `Float`
