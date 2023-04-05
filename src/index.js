function updateTime() {
  let austinDateElement = document.querySelector("#austin .city-date");
  austinDateElement.innerHTML = moment()
    .tz("America/Chicago")
    .format("dddd, MMMM Do, YYYY");

  let austinTimeElement = document.querySelector("#austin .city-time");
  austinTimeElement.innerHTML = moment()
    .tz("America/Chicago")
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

  let reykjavikDateElement = document.querySelector("#reykjavik .city-date");
  reykjavikDateElement.innerHTML = moment()
    .tz("Atlantic/Reykjavik")
    .format("dddd, MMMM Do, YYYY");

  let reykjavikTimeElement = document.querySelector("#reykjavik .city-time");
  reykjavikTimeElement.innerHTML = moment()
    .tz("Atlantic/Reykjavik")
    .format("h:mm:ss A");
}
updateTime();
setInterval(updateTime, 1000);
