import React, { useState } from "react";
import css from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header";
import BasicData from "./BasicData";
import APIs from "./APIs";

function App() {

  const [apiData, setApiData] = useState({});
  const [apiOneData, setApiOneData] = useState({});

  const callApiAndSetApiData = city => {
    APIs.getWeatherAPI(city)
      .then(res => {
        const { lat, lon } = res?.coord ?? { lat: null, lon: null };

        // set the normal api data;
        setApiData(res);

        APIs.getWeatherOneAPI(lat, lon)
          .then(res => {
            console.log('the response is', res);
          })
      });
  }

  return <div className={css.background}>
    <Header getWeatherDetails={callApiAndSetApiData} />
    <BasicData apiData={apiData} oneData={apiOneData} />
  </div>
}

export default App;