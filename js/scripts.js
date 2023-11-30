// Assignment2 Firas Bukhari 2140472
function getData() {
  const lat = document.getElementsByName("lat")[0].value.trim();
  const lng = document.getElementsByName("lng")[0].value.trim();
  // prettier-ignore
  if (lat.match("[0-9]+\\.[0-9]+") && lng.match("-?[0-9]+\\.[0-9]+")) {
    //correct entry

    const endpoint =
      "https://api.sunrise-sunset.org/json?lat=${lat}&lng=-${lng}&date=today";
    console.log(endpoint);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    xhr.onload = () => {
      if (xhr.status === 200) {
        //correct callback

        const data = JSON.parse(xhr.responseText);
        const sunrise = data.results.sunrise;
        const sunset = data.results.sunset;
        const dayLength = data.results.day_length;
        const solarNoon = data.results.solar_noon;
        const civilTwilightBegin = data.results.civil_twilight_begin;
        const civilTwilightEnd = data.results.civil_twilight_end;
        const sunriseElement = document.createElement("p");
        sunriseElement.textContent = "Sunrise is at: " + sunrise;
        const sunsetElement = document.createElement("p");
        sunsetElement.textContent = "Sunset is at: " + sunset;
        const dayLengthElement = document.createElement("p");
        dayLengthElement.textContent = "Day length is: " + dayLength;
        const solarNoonElement = document.createElement("p");
        solarNoonElement.textContent = "Solar noon is at: " + solarNoon;
        const civilTwilightBeginElement = document.createElement("p");
        civilTwilightBeginElement.textContent =
          "Civil twilight begin at: " + civilTwilightBegin;
        const civilTwilightEndElement = document.createElement("p");
        civilTwilightEndElement.textContent =
          "Civil twilight end at: " + civilTwilightEnd;

        const container = document.getElementById("displayValue");
        container.textContent = "";
        container.appendChild(sunriseElement);
        container.appendChild(sunsetElement);
        container.appendChild(dayLengthElement);
        container.appendChild(solarNoonElement);
        container.appendChild(civilTwilightBeginElement);
        container.appendChild(civilTwilightEndElement);
      }
    };
    xhr.onerror = () => {
      //error callback

      displayErorr("An error occured while fetching the data");
    };
    xhr.send();
  } else {
    //incorrect entry

    displayErorr(
      "Kindly enter the Latitude, Longitude in the correct format, eg. 36.7201600, -4.4203400"
    );
  }
}

function displayErorr(err) {
  const erorrElement = document.createElement("p");
  erorrElement.textContent = err;
  erorrElement.classList.add("error");

  const container = document.getElementById("displayValue");
  container.textContent = "";
  container.appendChild(erorrElement);
}

function dblclick() {
  const dblElement = document.createElement("p");
  dblElement.textContent = "You don't have to double click!!";
  dblElement.classList.add("error");

  const container = document.getElementById("displayValue");
  container.textContent = "";
  container.appendChild(dblElement);
}

let input1Clear = document.getElementsByName("lat")[0];
let input2Clear = document.getElementsByName("lng")[0];
input1Clear.addEventListener("keyup", (e) => {
  if (e.code === "Backspace") {
    document.getElementsByName("lat")[0].value = "";
    document.getElementsByName("lng")[0].value = "";
  }
});
input2Clear.addEventListener("keyup", (e) => {
  if (e.code === "Backspace") {
    document.getElementsByName("lat")[0].value = "";
    document.getElementsByName("lng")[0].value = "";
  }
});
