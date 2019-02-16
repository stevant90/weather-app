import React from "react";
import PropTypes from "prop-types";

import arrow from "../assets/icons/arrow.png";
import { CITIES } from "../apiInfo.js";
import CityItem from "./CityItem";

const ChooseCity = ({ changeCity, city, openList, closeList, listOpen }) => {
  const getCurrentDate = () => {
    const date = new Date();
    const options = { day: "2-digit", month: "long" };
    const currentDate = date.toLocaleDateString("en-GB", options);
    return currentDate;
  };

  return (
    <div className="ChooseCity">
      <article className="ChooseCity__select-wrapper" onMouseLeave={closeList}>
        <ul className="ChooseCity__select">
          <li className="ChooseCity__select-item" onMouseOver={openList}>
            {city.name}
          </li>
          {Object.values(CITIES).map(otherCity =>
            city.name !== otherCity.name ? (
              <CityItem
                otherCity={otherCity}
                changeCity={changeCity}
                key={otherCity.name}
                listOpen={listOpen}
              />
            ) : null
          )}
        </ul>
        <img
          src={arrow}
          alt="dropdown-arrow"
          onMouseOver={openList}
          className={`ChooseCity__arrow ${
            listOpen ? "ChooseCity__arrow--rotate" : ""
          }`}
        />
        <p className={`currentDate ${listOpen ? "currentDate--fadeIn" : ""}`}>
          {getCurrentDate()}
        </p>
      </article>
    </div>
  );
};

ChooseCity.propTypes = {
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
  openList: PropTypes.func.isRequired,
  closeList: PropTypes.func.isRequired,
  listOpen: PropTypes.bool.isRequired
};

export default ChooseCity;
