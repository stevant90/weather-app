import React from "react";
import PropTypes from "prop-types";

import bg from "../assets/images/bg.jpg";
import ns from "../assets/images/ns.jpg";

import ChooseCity from "./ChooseCity.jsx";
import WeeklyWeather from "./WeeklyWeather.jsx";

const CityCard = ({
  changeCity,
  city,
  openList,
  closeList,
  listOpen,
  weeklyWeather,
  fadeCity
}) => {
  return (
    <div className="CityCard">
      <div
        style={{ backgroundImage: `url(${ns})` }}
        className={`CityCard__background ${
          !fadeCity ? "CityCard__background--fade" : ""
        }`}
      >
        <div
          className={`CityCard--blur`}
          style={{ backgroundImage: `url(${ns})` }}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={`CityCard__background ${
          fadeCity ? " CityCard__background--fade" : ""
        }`}
      >
        <div
          className={`CityCard--blur`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      </div>
      <div className="CityCard__content">
        <ChooseCity
          changeCity={changeCity}
          city={city}
          openList={openList}
          closeList={closeList}
          listOpen={listOpen}
        />
        <WeeklyWeather weeklyWeather={weeklyWeather} />
      </div>
    </div>
  );
};

CityCard.propTypes = {
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
  openList: PropTypes.func.isRequired,
  closeList: PropTypes.func.isRequired,
  listOpen: PropTypes.bool.isRequired,
  weeklyWeather: PropTypes.array.isRequired,
  fadeCity: PropTypes.bool.isRequired
};

export default CityCard;
