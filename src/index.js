function updateTime() {
  let cityDateElement = document.querySelector("#city-row .city-date");
  cityDateElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("dddd, MMMM Do, YYYY");

  let cityTimeElement = document.querySelector("#city-row .city-time");
  cityTimeElement.innerHTML = moment()
    .tz("America/Chicago")
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
