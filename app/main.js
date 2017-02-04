const d3_request = require("d3-request");
const d3_queue = require("d3-queue");

function continentFind(countries, continent) {
  // Match the continent with the user input
  const cont = countries.filter((country) => country.continent === continent);
  return cont;
}

function resortMatch(areas, resorts, tours) {
  const objectFind = {};
  // Iterate over all resorts and countries
  for (let i = 0; i < areas.length; i++) {
    for (let y = 0; y < resorts.length; y++) {
      // Get the arrays of all tours for each resort
      resorts[y].tours = tours.filter((tour) => tour.resort_id === resorts[y].id);
    }
    // store each resort under their name in the object
    objectFind[`${areas[i].name}`] = resorts.filter((resort) => resort.Country === areas[i].name);
  }
  return objectFind;
}

function ready(err, data) {
  // Mock user input
  const continent = "Asia";
  const price = 4000;
  const days = 10;
  // Get continent data
  const selectedWorldArea = continentFind(data[0], continent);
  // Get resort and tour matchup
  const resortsAndActivities = resortMatch(selectedWorldArea, data[1], data[2]);
  // work out what to return based on price and trip duration
  const tripResults = tripMatch(resortsAndActivities, price, days);
  debugger;
}
// Load all the data into a callback function
d3_queue.queue()
  .defer(d3_request.json, "../data/countries.json")
  .defer(d3_request.json, "../data/resorts.json")
  .defer(d3_request.json, "../data/tours.json")
  .awaitAll(ready);
