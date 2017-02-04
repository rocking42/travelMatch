const d3_request = require("d3-request");
const d3_queue = require("d3-queue");

function ready(err, data) {
  debugger;
}
d3_queue.queue()
  .defer(d3_request.json, "../data/countries.json")
  .defer(d3_request.json, "../data/resorts.json")
  .defer(d3_request.json, "../data/tours.json")
  .awaitAll(ready);
