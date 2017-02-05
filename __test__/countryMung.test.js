const d3_request = require("d3-request");
const d3_queue = require("d3-queue");
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
import {
  continentFind,
  resortMatch,
  resortFilter,
  tripMatch,
  tourMatch,
  tours
} from "../app/countryMung.js";

const result = [{"id":1,"name":"Bali","continent":"Asia"},
  {"id":2,"name":"Japan","continent":"Asia"},
  {"id":3,"name":"Thailand","continent":"Asia"}];

test('Continent passed in returns correct countries', (done) => {

  function testAll(data) {
    const countries = JSON.parse(data[0]);
    const resorts = JSON.parse(data[1]);
    const allTours = JSON.parse(data[2]);
    expect(continentFind(countries, "Asia")).toEqual(result);
    expect(resortMatch(result, resorts, allTours).Bali[0].name).toBe("Kuta Paradiso");
    done();
  }

  function promiseTest() {
    var promises = [
      fs.readFileAsync("data/countries.json"),
      fs.readFileAsync("data/resorts.json"),
      fs.readFileAsync("data/tours.json")
    ];
    return Promise.all(promises);
  }
  promiseTest().then((values) => {
    testAll(values)
  })

})
