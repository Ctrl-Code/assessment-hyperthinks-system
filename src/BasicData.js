import { Card, Container, Col, Row } from "react-bootstrap"
import styled from "styled-components"
import Chart from "./Chart";

const StyledCol = styled(Col)`
    width: 300px;
`

const CardRows = (first, second = "-") => <Row>
    <Col>
        {first}
    </Col>
    <Col>
        {second}
    </Col>
</Row>

export default function BasicData({ apiData = {}, oneData = {} }) {

    if (apiData?.name ?? null) {
        localStorage.setItem("apiData", JSON.stringify(apiData));
        console.log('set Data in localStorage');
    }

    const LocalStorageAPIData = JSON.parse(localStorage.getItem("apiData"));

    const cityName = LocalStorageAPIData?.name ?? null;
    const coord = LocalStorageAPIData?.coord ?? { lat: null, lon: null };

    const description = LocalStorageAPIData?.weather?.[0]?.description ?? null;
    const feelsLike = LocalStorageAPIData?.main?.feels_like ?? null;
    const humidity = LocalStorageAPIData?.main?.humidity ?? null;
    const temperature = LocalStorageAPIData?.main?.temp ?? null;
    const maxTemperature = LocalStorageAPIData?.main?.temp_max ?? null;
    const minTemperature = LocalStorageAPIData?.main?.temp_min ?? null;

    return <Container>
        <Row sm={1} md={2}>
            <StyledCol >
                <Card style={{ backgroundColor: "rgb(188 223 243)" }}>
                    <Card.Body>
                        <Card.Title>
                            Current Weather
                        </Card.Title>

                        {
                            cityName &&
                            <Card.Subtitle>
                                {cityName}
                            </Card.Subtitle>
                        }

                        {/* CARD DATA */}
                        <Card.Text>
                            <Container fluid>
                                {CardRows("Lat.", coord.lat)}
                                {CardRows("Lon.", coord.lon)}
                                {CardRows("Desc.", description)}
                                {CardRows("Feels", feelsLike)}
                                {CardRows("Humidity", humidity)}
                                {CardRows("Temp.", temperature)}
                                {CardRows("Max Temp.", maxTemperature)}
                                {CardRows("Min Temp.", minTemperature)}

                            </Container>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </StyledCol>

            <Col>
                <Chart oneData={oneData} />
            </Col>
        </Row>
    </Container>
}