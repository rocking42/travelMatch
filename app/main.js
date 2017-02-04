const d3_request = require("d3-request");
const d3_queue = require("d3-queue");
import {
  continentFind,
  resortMatch,
  resortFilter,
  tripMatch
} from "./countryMung.js";

function tours(tours, days, object) {

}

function tourMatch() {

};



function ready(err, data) {
  // Mock user input
  const continent = "Asia";
  const price = 5000;
  const days = 10;
  const roomForActivities = 1000;
  // Destructure the data into varibles
  const [countries, resorts, tours] = [data[0], data[1], data[2]];
  // Get continent data
  const selectedWorldArea = continentFind(countries, continent);
  // Get resort and tour matchup
  const resortsAndActivities = resortMatch(selectedWorldArea, resorts, tours);
  // work out what to return based on price and trip duration
  const tripResults = tripMatch(resortsAndActivities, price, days, roomForActivities);
  // Attach an array to each resort
  const tourFind = tourMatch(tripResults, price, days);
}

// Load all the data into a callback function
d3_queue.queue()
  .defer(d3_request.json, "../data/countries.json")
  .defer(d3_request.json, "../data/resorts.json")
  .defer(d3_request.json, "../data/tours.json")
  .awaitAll(ready);
