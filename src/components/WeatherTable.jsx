import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { fetchData } from "../service/communicationService";
import { CITIES } from "../apiInfo";

import CurrentWeatherInfo from "./CurrentWeatherInfo.jsx";
import AdditionalWeatherInfo from "./AdditionalWeatherInfo.jsx";
import CityCard from "./CityCard.jsx";
import ErrorPage from "./ErrorPage";

export default class WeatherTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: CITIES.belgrade,
      currentWeather: {},
      weeklyWeather: [],
      requestError: null,
      lastUpdated: new Date(),
      listOpen: false,
      animate: false,
      rotateDeg: 360,
      fadeCity: false
    };
  }

  componentDidMount() {
    const { city } = this.state;

    this.loadData(city);
  }

  loadData(city) {
    const lastUpdated = new Date();

    fetchData(
      city,
      (currentWeather, weeklyWeather) => {
        this.setState({
          city,
          currentWeather,
          weeklyWeather,
          lastUpdated
        });
      },
      requestError => {
        this.setState({ requestError });
      }
    );
  }

  changeCity = city => {
    this.loadData(city);
    this.setState(prevState => ({
      listOpen: false,
      fadeCity: !prevState.fadeCity
    }));
  };

  refreshData = () => {
    const { city } = this.state;
    const rotateDeg = this.state.rotateDeg + 360;
    this.loadData(city);
    this.setState(prevState => ({
      rotateDeg,
      animate: !prevState.animate
    }));
  };

  restartAnimation = () => {
    this.setState({ animate: false });
  };

  openList = () => {
    this.setState({ listOpen: true });
  };

  closeList = () => {
    this.setState({ listOpen: false });
  };

  render() {
    const {
      city,
      currentWeather,
      weeklyWeather,
      requestError,
      lastUpdated,
      listOpen,
      animate,
      rotateDeg,
      fadeCity
    } = this.state;

    const transitionSettings = {
      transitionName: "main-transition",
      transitionAppear: true,
      transitionAppearTimeout: 0,
      transitionEnter: false,
      transitionLeave: false
    };

    if (!currentWeather || !weeklyWeather) {
      return null;
    }

    return (
      <ReactCSSTransitionGroup className="MainContent" {...transitionSettings}>
        {requestError ? (
          <ErrorPage />
        ) : (
          <main className="WeatherTable">
            <div className="WeatherInfo">
              <CurrentWeatherInfo
                key="weather-info"
                currentWeather={currentWeather}
                refreshData={this.refreshData}
                lastUpdated={lastUpdated}
                animate={animate}
                rotateDeg={rotateDeg}
                restartAnimation={this.restartAnimation}
              />
              <AdditionalWeatherInfo
                currentWeather={currentWeather}
                key="weather-add"
              />
            </div>
            <CityCard
              key="city"
              changeCity={this.changeCity}
              city={city}
              openList={this.openList}
              closeList={this.closeList}
              listOpen={listOpen}
              weeklyWeather={weeklyWeather}
              fadeCity={fadeCity}
            />
          </main>
        )}
      </ReactCSSTransitionGroup>
    );
  }
}
