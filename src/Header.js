import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Name = styled.div`
    display: flex;
    height: 100%;
    color: #4b64c1;
    font-weight: 900;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
    text-decoration: underline;
`;

export default function Header({
    getWeatherDetails
}) {
    return <Container>
        <Row xs={1} md={2}>
            <Col md={3} sm={6}>
                <Name>
                    Weather App
                </Name>
            </Col>
            <Col md={9} sm={10}>
                <SearchBar
                    getWeatherDetails={getWeatherDetails} />
            </Col>
        </Row>
    </Container>
}