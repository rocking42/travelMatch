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


export function inputMerge() {
  d3_queue.queue()
    .defer(d3_request.json, "../data/countries.json")
    .defer(d3_request.json, "../data/resorts.json")
    .defer(d3_request.json, "../data/tours.json")
    .awaitAll((err, data) => {
      // Gather all the user inputs into variables
      const continent = document.querySelector("input[placeholder='continent']").value
      const price = document.querySelector("input[placeholder='price']").value
      const days = document.querySelector("input[placeholder='days']").value
      const roomForActivities = document.querySelector("input[placeholder='activityPrice']").value
      // Pass the data into the callback function
      ready(err, data, continent, price, days, roomForActivities);
    });
}

export function ready(err, data, continent, price, days, roomForActivities) {
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
