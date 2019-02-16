const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
const API_KEY = "5fcd5de26357fea769a7c0eff328a254";
const EXCLUDE = "?exclude=minutely,hourly,alerts,flags&units=auto";

const CITIES = {
  belgrade: {
    lat: 44.787197,
    long: 20.457273,
    name: "Belgrade"
  },
  novisad: {
    lat: 45.267136,
    long: 19.833549,
    name: "Novi Sad"
  }
};

export { BASE_URL, API_KEY, EXCLUDE, CITIES };
