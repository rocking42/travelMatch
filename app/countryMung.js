export function continentFind(countries, continent) {
  // Match the continent with the user input
  const cont = countries.filter((country) => country.continent === continent);
  return cont;
}

export function resortMatch(areas, resorts, tours) {
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

export function resortFilter(price, days, activityMoney, resort) {
  const resortPrice = +resort.price_per_night.slice(1)
  if (resortPrice * days < price - activityMoney) {
    // Add remaining funds for activities for later use
    resort.priceRemaining = price - resortPrice * days;
  }
  // Return any values that are greater than the price minus funds for activities
  return resortPrice * days < price - activityMoney;
}

export function tripMatch(tripData, price, days, activityMoney) {
  // Iterate over all countries
  for (var prop in tripData) {
    // filter out values based on users price
    tripData[prop] = tripData[prop].filter(resortFilter.bind(null, price, days, activityMoney));
  }
  var priceRemaining = price - activityMoney;
  debugger;
}
