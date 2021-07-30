const axios = require("axios");
const API_KEY_OPEN_WEATHER = require("../constants");

const processResponse = resObj => {
    let status = Object.keys(resObj).includes("data");
    if (status)
        return resObj.data;
    else
        return null;
}

const getWeatherAPI = async (city) => await
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPEN_WEATHER}&units=metric`)
        .then(res => processResponse(res))
        .catch(err => processResponse(err));

module.exports = getWeatherAPI;