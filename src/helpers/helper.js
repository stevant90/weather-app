import cloud from "../assets/icons/cloud.svg";
import cloudy from "../assets/icons/cloudy.svg";
import rain from "../assets/icons/rain.svg";
import storn from "../assets/icons/storn.svg";
import snowing from "../assets/icons/snowing.svg";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

export const makeWeatherIcon = icon => {
  switch (icon) {
    case "cloud":
      icon = cloud;
      break;
    case "cloudy":
      icon = cloudy;
      break;
    case "partly-cloudy-night":
      icon = cloudy;
      break;
    case "partly-cloudy-day":
      icon = cloudy;
      break;
    case "rain":
      icon = rain;
      break;
    case "snow":
      icon = snowing;
      break;
    case "sun":
      icon = sun;
      break;
    case "wind":
      icon = storn;
      break;
    case "clear-night":
      icon = moon;
      break;
    default:
      icon = sun;
  }

  return icon;
};
