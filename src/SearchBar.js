import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchBar({ getWeatherDetails }) {
    const [searchText, setSearchText] = useState("");

    const fetchWeather = () => getWeatherDetails(searchText);

    const clearBox = () => setSearchText("");

    return <InputGroup className="mb-3">

        <InputGroup.Text
            onClick={clearBox}
            style={{ cursor: "pointer" }}
            id="basic-addon2">Clear</InputGroup.Text>

        <FormControl
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Enter city name"
            aria-describedby="basic-addon2"
        />

        <InputGroup.Text
            onClick={fetchWeather}
            style={{ cursor: "pointer" }}
            id="basic-addon2">Search</InputGroup.Text>
    </InputGroup>
}

export default SearchBar;