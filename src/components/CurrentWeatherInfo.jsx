import React from "react";
import PropTypes from "prop-types";
import ReactTimeAgo from "react-time-ago";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { makeWeatherIcon } from "../helpers/helper";
import refresh from "../assets/icons/refresh.svg";
import Chart from "./Chart";

const CurrentWeatherInfo = ({
  currentWeather,
  refreshData,
  lastUpdated,
  animate,
  rotateDeg,
  restartAnimation
}) => {
  const { summary, icon, temperatureOutput } = currentWeather;

  const animateRefreshBtn = {
    transform: `rotate(${rotateDeg}deg)`,
    transition: "transform .5s ease-out"
  };

  const transitionSettings = {
    transitionName: "chart-animation",
    transitionAppear: true,
    transitionAppearTimeout: 1000,
    transitionEnter: false,
    transitionLeave: false
  };

  return (
    <div className="CurrentWeather">
      <ReactCSSTransitionGroup {...transitionSettings}>
        <Chart className="Chart" key="chart" animate={animate} />
      </ReactCSSTransitionGroup>
      <div className="CurrentWeather__content">
        <div className="CurrentWeather__info">
          <article className="CurrentWeather__text">
            <p className="CurrentWeather__temp">{temperatureOutput}&deg;</p>
            <p className="CurrentWeather__summary">{summary}</p>
          </article>
          <img
            src={makeWeatherIcon(icon)}
            alt="weather-icon"
            className="CurrentWeather__icon"
          />
        </div>
        <div className="CurrentWeather__updateText">
          <img
            src={refresh}
            alt="refresh-icon"
            onClick={refreshData}
            onTransitionEnd={restartAnimation}
            style={animateRefreshBtn}
            className="CurrentWeather__refreshIcon"
          />
          <span>Updated</span>
          <ReactTimeAgo date={lastUpdated} />
        </div>
      </div>
    </div>
  );
};

CurrentWeatherInfo.propTypes = {
  currentWeather: PropTypes.object.isRequired,
  refreshData: PropTypes.func.isRequired,
  lastUpdated: PropTypes.object.isRequired,
  animate: PropTypes.bool.isRequired,
  rotateDeg: PropTypes.number.isRequired,
  restartAnimation: PropTypes.func.isRequired
};

export default CurrentWeatherInfo;
