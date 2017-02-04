var expect    = require("chai").expect;
var assert    = require("chai").assert;
var CountryData = require("../../lib/CountryData");
var path = require('path');

describe("CountryData", function() {

  describe("#byContinent", function(){

    countryData = new CountryData(path.join(__dirname, '../../data/countries.json'));

    it("should return countries filtered by Continent", function() {
      expect(countryData.length).to.eql(999);
    });
  });
})