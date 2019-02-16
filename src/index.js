import React from "react";
import ReactDOM from "react-dom";
import JavascriptTimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

import WeatherTable from "./components/WeatherTable.jsx";

import "./styles.scss";

JavascriptTimeAgo.locale(en);

const App = () => (
  <div className="App">
    <WeatherTable />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
