import React from "react";
import PropTypes from "prop-types";

const AdditionalWeatherInfo = ({ currentWeather }) => {
  const {
    humidityOutput,
    dewPointOutput,
    uvIndex,
    visibilityOutput
  } = currentWeather;

  return (
    <div className="AdditionalWeatherInfo">
      <div className="AdditionalWeatherInfo__content">
        <article className="AdditionalWeatherInfo__text">
          <p className="AdditionalWeatherInfo__units">{humidityOutput}&#37;</p>
          <p className="AdditionalWeatherInfo__title">Humidity</p>
        </article>
        <article className="AdditionalWeatherInfo__text">
          <p className="AdditionalWeatherInfo__units">{dewPointOutput}&deg;</p>
          <p className="AdditionalWeatherInfo__title">Dew Pt.</p>
        </article>
        <article className="AdditionalWeatherInfo__text">
          <p className="AdditionalWeatherInfo__units">{uvIndex}/10</p>
          <p className="AdditionalWeatherInfo__title">UV Index</p>
        </article>
        <article className="AdditionalWeatherInfo__text">
          <p className="AdditionalWeatherInfo__units">{visibilityOutput} km</p>
          <p className="AdditionalWeatherInfo__title">Visibility</p>
        </article>
      </div>
    </div>
  );
};

AdditionalWeatherInfo.propTypes = {
  currentWeather: PropTypes.object.isRequired
};

export default AdditionalWeatherInfo;
