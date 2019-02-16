import React from "react";
import PropTypes from "prop-types";

const CityItem = ({ otherCity, changeCity, listOpen }) => {
  const setCity = () => {
    changeCity(otherCity);
  };

  return (
    <li
      onClick={setCity}
      className={`ChooseCity__select-item ${
        !listOpen ? "ChooseCity__select-item--fadeIn" : ""
      }`}
    >
      {otherCity.name}
    </li>
  );
};

CityItem.propTypes = {
  otherCity: PropTypes.object.isRequired,
  changeCity: PropTypes.func.isRequired,
  listOpen: PropTypes.bool.isRequired
};

export default CityItem;
