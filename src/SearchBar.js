import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchBar({ getWeatherDetails }) {
    const [searchText, setSearchText] = useState("");

    const fetchWeather = () => getWeatherDetails(searchText);

    return <InputGroup className="mb-3">
        <FormControl
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Search City"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
        />
        <InputGroup.Text
            onClick={fetchWeather}
            id="basic-addon2">Search City</InputGroup.Text>
    </InputGroup>
}

export default SearchBar;