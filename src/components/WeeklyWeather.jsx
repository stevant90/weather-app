import React from "react";
import PropTypes from "prop-types";

import { makeWeatherIcon } from "../helpers/helper";

const WeeklyWeather = ({ weeklyWeather }) => {
  const date = new Date();
  const currentDay = date.toLocaleDateString("en-GB", { weekday: "short" });
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const weekDaysOutput = weekDays
    .slice(weekDays.indexOf(currentDay) + 1)
    .concat(weekDays.slice(0, weekDays.indexOf(currentDay) + 1));

  const showWeekWeather = weeklyWeather.map((weather, index) => {
    return (
      <article key={index} className="WeeklyWeather__card">
        <div className="WeeklyWeather__card-content">
          <img
            src={makeWeatherIcon(weather.icon)}
            alt="weather-icon"
            className="WeeklyWeather__icon"
          />
          <p className="WeeklyWeather__temp">{weather.temperatureMax}&deg;</p>
          <p className="WeeklyWeather__days">{weekDaysOutput[index]}</p>
        </div>
      </article>
    );
  });

  return <div className="WeeklyWeather">{showWeekWeather}</div>;
};

WeeklyWeather.propTypes = {
  weeklyWeather: PropTypes.array.isRequired
};

export default WeeklyWeather;
