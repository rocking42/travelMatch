const d3_request = require("d3-request");
const d3_queue = require("d3-queue");
import {
  continentFind,
  resortMatch,
  resortFilter,
  tripMatch,
  tourMatch,
  tours
} from "./countryMung.js";
import {
  showData
} from "./displayData";

function ready(err, data) {
  // Mock user input
  const continent = "Asia";
  const price = 4500;
  const days = 14;
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
  const tourFind = tourMatch(tripResults, roomForActivities, days);
  // Append the html result to the page
  const displayData = showData(tourFind, days, price);
}

// Load all the data into a callback function
d3_queue.queue()
  .defer(d3_request.json, "../data/countries.json")
  .defer(d3_request.json, "../data/resorts.json")
  .defer(d3_request.json, "../data/tours.json")
  .awaitAll(ready);
