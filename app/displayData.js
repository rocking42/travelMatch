
// Package
// =======
// 14 days in Kuta, Bali: $1000
//
// Tours
// -----
// Horse-Riding:         2 Day Evening Horse Riding Trip X 2: $750
//                       1 Day Evening Horse Riding Trip X 1: $1000
//
// Diving:               5 day Dive Trip X 1: $2000
//
// Total:                $4500
// Total Activity Days:  10

export function showData(tourData, days, price) {
  // Iterate over all data
  for(const prop in tourData) {
    // If data is present
    if(tourData[prop]) {
      // Create variables from each resort
      for (const selectedResort of tourData[prop]) {
      const country = selectedResort.Country;
      const resort = selectedResort.name;
      const totalHotel = selectedResort.hotelPrice;
      const grandTotal = selectedResort.totalPrice;
      const allTours = [];
      let activityDays = 0;
      // Create the tours template
      for(const tour of selectedResort.tourResults) {
        activityDays += tour.days
        allTours.push(
          `<p>${tour.description}: $${tour.total_price}</p>`
        );
      }
      // Add all variables to the resulting template
      const template = `
      <h3>Package</h3>
      <p>=======</p>
      <p>${days} days in ${resort}, ${country}: $${totalHotel}</p>
      <br />
      <h3>Tours</h3>
      <p>--------</p>
      <div class="tours">${allTours.join("")}</div>
      <h3>grand total: $${grandTotal}</h3>
      <p>Total activity day's: ${activityDays}</p>
      `;
      // Add template to page
      var div = document.createElement("div");
      div.innerHTML = template;
      document.body.append(div);
    }
    }
  }
}
