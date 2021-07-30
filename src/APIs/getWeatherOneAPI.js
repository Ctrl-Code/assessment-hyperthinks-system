const axios = require("axios");
const API_KEY_OPEN_WEATHER = require("../constants");

const processResponse = resObj => {
    let status = Object.keys(resObj).includes("data");
    if (status)
        return resObj.data;
    else
        return null;
}

const getWeatherOneAPI = async (lat,lon) => await
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY_OPEN_WEATHER}`)
        .then(res => processResponse(res))
        .catch(err => processResponse(err));

module.exports = getWeatherOneAPI;