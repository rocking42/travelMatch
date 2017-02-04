"use strict"

var fs = require("fs")
var countriesJson

class CountryData {
  constructor(dataFile) {
    // We can use a synchronous call as data is small
    countriesJson = fs.readFileSync(dataFile);
  }

  byContinent(continent) {

  }


}

module.exports = CountryData