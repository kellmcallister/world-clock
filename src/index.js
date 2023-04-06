function updateTime() {
  let austinDateElement = document.querySelector("#austin .city-date");
  austinDateElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("dddd, MMMM Do, YYYY");

  let austinTimeElement = document.querySelector("#austin .city-time");
  austinTimeElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("h:mm:ss A");

  let wanakaDateElement = document.querySelector("#wanaka .city-date");
  wanakaDateElement.innerHTML = moment()
    .tz("Pacific/Auckland")
    .format("dddd, MMMM Do, YYYY");

  let wanakaTimeElement = document.querySelector("#wanaka .city-time");
  wanakaTimeElement.innerHTML = moment()
    .tz("Pacific/Auckland")
    .format("h:mm:ss A");

  let edinburghDateElement = document.querySelector("#edinburgh .city-date");
  edinburghDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd, MMMM Do, YYYY");

  let edinburghTimeElement = document.querySelector("#edinburgh .city-time");
  edinburghTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss A");

  let sorrentoDateElement = document.querySelector("#sorrento .city-date");
  sorrentoDateElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("dddd, MMMM Do, YYYY");

  let sorrentoTimeElement = document.querySelector("#sorrento .city-time");
  sorrentoTimeElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("h:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);

function cityUpdate(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone
    .replace("_", " ")
    .split("/")[1]
    .replace("London", "Edinburgh")
    .replace("Rome", "Sorrento")
    .replace("Auckland", "Wanaka");

  let cityBox = document.querySelector("#city-box");
  cityBox.innerHTML = `
        <div class="row">
          <div class="col-6">
            <div class="city-name">${cityName}</div>
            <div class="city-date">${cityTime.format("dddd, MMMM Do, YYYY")}
              </div>
              </div>
            <div class="col-6">
            <div class="city-time">${cityTime.format("h:mm:ss A")}</div>
          </div>
        </div>
        <a href="/">Back to KMac's fave cities</a>
        `;
  setInterval(() => {
    cityUpdate(event);
  }, 1000);
}

let citySelect = document.querySelector("#city-dropdown");
citySelect.addEventListener("change", cityUpdate);

/* Home page cities: Austin, wanaka, edinburgh, sorrento
Beach cities: aruba hawaii maldives seychelles borabora
Ski cities: denver france switzerland whistler/canada niseko/japan
Nightlife cities: barcelona paris dublin lisbon amsterdam prague las vegas buenos aires sao paulo new york
Wine Country: italy france spain argentina california australia
        <option value="Beach">Best Beaches</option>
        <option value="Ski">Ski Spots</option>
        <option value="Nightlife">Nightlife</option>
        <option value="Wine">Wine Regions</option>
*/
