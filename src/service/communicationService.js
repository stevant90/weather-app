import axios from "axios";

import { BASE_URL, API_KEY, EXCLUDE } from "../apiInfo";

export const fetchData = (city, succesHandler, errorHandler) => {
  const url = `${BASE_URL}${API_KEY}/${city.lat},${city.long}${EXCLUDE}`;

  return axios
    .get(url)
    .then(response => {
      const weatherResponse = response.data.currently;
      const weeklyWeatherResponse = response.data.daily.data;

      const {
        temperature,
        summary,
        icon,
        humidity,
        dewPoint,
        uvIndex,
        visibility
      } = weatherResponse;

      const temperatureOutput = Math.round(temperature);
      const humidityOutput = humidity.toFixed(1) * 100;
      const visibilityOutput = Math.round(visibility);
      const dewPointOutput = Math.round(((dewPoint - 32) * 5) / 9);

      const currentWeather = {
        temperatureOutput,
        summary,
        icon,
        humidityOutput,
        dewPointOutput,
        uvIndex,
        visibilityOutput
      };

      const weekWeatherReduceLength = weeklyWeatherResponse.slice(1, 8);

      const weeklyWeather = weekWeatherReduceLength.map((weather, index) => {
        const icon = weather.icon;
        const temperatureMax = Math.round(weather.temperatureMax);

        const dailyWeather = { icon, temperatureMax };

        return dailyWeather;
      });

      succesHandler(currentWeather, weeklyWeather);
    })
    .catch(error => errorHandler(error));
};
