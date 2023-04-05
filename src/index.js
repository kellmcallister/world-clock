function updateTime() {
  let chicagoDateElement = document.querySelector("#chicago .city-date");
  chicagoDateElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("dddd, MMMM Do, YYYY");

  let chicagoTimeElement = document.querySelector("#chicago .city-time");
  chicagoTimeElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("h:mm:ss A");

  let reykjavikDateElement = document.querySelector("#reykjavik .city-date");
  reykjavikDateElement.innerHTML = moment()
    .tz("Atlantic/Reykjavik")
    .format("dddd, MMMM Do, YYYY");

  let reykjavikTimeElement = document.querySelector("#reykjavik .city-time");
  reykjavikTimeElement.innerHTML = moment()
    .tz("Atlantic/Reykjavik")
    .format("h:mm:ss A");

  let romeDateElement = document.querySelector("#rome .city-date");
  romeDateElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("dddd, MMMM Do, YYYY");

  let romeTimeElement = document.querySelector("#rome .city-time");
  romeTimeElement.innerHTML = moment().tz("Europe/Rome").format("h:mm:ss A");

  let sydneyDateElement = document.querySelector("#sydney .city-date");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM Do, YYYY");

  let sydneyTimeElement = document.querySelector("#sydney .city-time");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss A");
}

function cityUpdate(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityBox = document.querySelector("#city-box");
  cityBox.innerHTML = `
        <div class="row">
          <div class="col-6">
            <div class="city-name">${cityName}</div>
            <div class="city-date">${cityTime.format(
              "dddd, MMMM Do, YYYY"
            )}</div>
          </div>
          <div class="col-6">
            <div class="city-time">${cityTime.format("h:mm:ss A")}</div>
          </div>
        </div>
      
  `;
}
updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city-dropdown");
citySelect.addEventListener("change", cityUpdate);
