import axios from "axios";
import API_KEY_OPEN_WEATHER from "../constants";

const processResponse = resObj => {
    let status = Object.keys(resObj).includes("data");
    if (status)
        return resObj.data;
    else
        return null;
}

const getWeatherAPI = async (city) => await
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY_OPEN_WEATHER}`)
        .then(res => processResponse(res))
        .catch(err => processResponse(err));

export default getWeatherAPI;