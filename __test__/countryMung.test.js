import {
  continentFind,
  resortMatch,
  resortFilter,
  tripMatch,
  tourMatch,
  tours
} from "../app/countryMung.js";

const countries = [{"id":1,"name":"Bali","continent":"Asia"},
{"id":2,"name":"Japan","continent":"Asia"},
{"id":3,"name":"Thailand","continent":"Asia"},
{"id":4,"name":"Spain","continent":"Europe"},
{"id":5,"name":"France","continent":"Europe"},
{"id":6,"name":"Mexico","continent":"Central America"},
{"id":7,"name":"Honduras","continent":"Central America"}];

const resorts = [{"id":1,"name":"Kuta Paradiso","price_per_night":"$200","Country":"Bali"},
{"id":2,"name":"Padma Resort Legian","price_per_night":"$528","Country":"Bali"},
{"id":3,"name":"Grand Aston","price_per_night":"$332","Country":"Bali"},
{"id":4,"name":"Rizzan Sea-Park Hotel Tancha-Bay","price_per_night":"$258","Country":"Japan"},
{"id":5,"name":"Hotel Orion Motobu Resort & Spa","price_per_night":"$826","Country":"Japan"},
{"id":6,"name":"Condominium Hotel Monpa","price_per_night":"$322","Country":"Japan"},
{"id":7,"name":"Okinawa Kariyushi Beach Resort Ocean Spa","price_per_night":"$426","Country":"Japan"},
{"id":8,"name":"Occidental Atenea Mar - Adults Only","price_per_night":"$208","Country":"Spain"},
{"id":9,"name":"Hotel SB Icaria barcelona","price_per_night":"$208","Country":"Spain"},
{"id":10,"name":"Hotel ILUNION Barcelona","price_per_night":"$148","Country":"Spain"},
{"id":11,"name":"W Barcelona","price_per_night":"$728","Country":"Spain"}]

const allTours = [{"resort_id":1,"description":"4 days horse-riding in lovely grassy undergrowth","days":4,"total_price":320},
{"resort_id":1,"description":"2 days horse-riding in mountains","days":2,"total_price":180},
{"resort_id":1,"description":"1 days diving for those that love to gallop","days":1,"total_price":78},
{"resort_id":1,"description":"4 days horse-riding in paddock","days":4,"total_price":264},
{"resort_id":1,"description":"1 days diving in hills","days":1,"total_price":79},
{"resort_id":1,"description":"4 days horse-riding in hills","days":4,"total_price":480},
{"resort_id":1,"description":"1 days horse-riding for those that love to Canter","days":1,"total_price":104},
{"resort_id":2,"description":"4 days diving in bush","days":4,"total_price":252},
{"resort_id":2,"description":"1 days horse-riding for those that love to gallop","days":1,"total_price":117},
{"resort_id":2,"description":"1 days horse-riding in paddock","days":1,"total_price":89},
{"resort_id":2,"description":"3 days diving for those that love to gallop","days":3,"total_price":249},
{"resort_id":2,"description":"2 days horse-riding in paddock","days":2,"total_price":108},
{"resort_id":2,"description":"4 days horse-riding for those that love to Canter","days":4,"total_price":464},
{"resort_id":2,"description":"2 days horse-riding creating happy times","days":2,"total_price":122},
{"resort_id":3,"description":"2 days diving in secret spot","days":2,"total_price":192},
{"resort_id":3,"description":"1 days diving for those that love to gallop","days":1,"total_price":125},
{"resort_id":3,"description":"1 days horse-riding in mountains","days":1,"total_price":53},
{"resort_id":3,"description":"2 days horse-riding in mountains","days":2,"total_price":158},
{"resort_id":4,"description":"2 days horse-riding in mountains","days":2,"total_price":236},
{"resort_id":4,"description":"4 days diving in paddock","days":4,"total_price":316},
{"resort_id":4,"description":"3 days horse-riding creating happy times","days":3,"total_price":327},
{"resort_id":4,"description":"2 days horse-riding in paddock","days":3,"total_price":342},
{"resort_id":4,"description":"1 days horse-riding for those that love to Canter","days":1,"total_price":114},
{"resort_id":5,"description":"1 days diving in bush","days":1,"total_price":77},
{"resort_id":5,"description":"3 days horse-riding in parkland","days":3,"total_price":156},
{"resort_id":5,"description":"2 days horse-riding in secret spot","days":2,"total_price":132},
{"resort_id":5,"description":"1 days horse-riding in bush","days":1,"total_price":121},
{"resort_id":5,"description":"2 days horse-riding creating happy times","days":2,"total_price":184},
{"resort_id":5,"description":"2 days diving in paddock","days":2,"total_price":116},
{"resort_id":6,"description":"2 days horse-riding in lovely grassy undergrowth","days":2,"total_price":218},
{"resort_id":6,"description":"2 days diving for those that love to gallop","days":2,"total_price":122},
{"resort_id":6,"description":"2 days diving in hills","days":2,"total_price":214},
{"resort_id":6,"description":"1 days horse-riding for those that love to gallop","days":1,"total_price":88},
{"resort_id":6,"description":"4 days horse-riding in mountains","days":4,"total_price":380},
{"resort_id":6,"description":"3 days diving in hills","days":3,"total_price":288},
{"resort_id":7,"description":"2 days diving in mountains","days":2,"total_price":242},
{"resort_id":7,"description":"2 days horse-riding in paddock","days":2,"total_price":206},
{"resort_id":7,"description":"1 days horse-riding in secret spot","days":1,"total_price":60},
{"resort_id":7,"description":"4 days diving creating happy times","days":4,"total_price":408},
{"resort_id":7,"description":"2 days horse-riding in secret spot","days":2,"total_price":216}]

const result = [{"id":1,"name":"Bali","continent":"Asia"},
{"id":2,"name":"Japan","continent":"Asia"},
{"id":3,"name":"Thailand","continent":"Asia"}];

test("Continent find returns correct array of countries", () => {
  expect(continentFind(countries, "Asia")).toEqual(result);
});

test("Continent find returns correct array of countries", () => {
  expect(resortMatch(result, resorts, allTours).Bali.length).toBeGreaterThan(0);
});
