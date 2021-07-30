import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DaysChart from "./DaysChart";
import HourlyChart from "./HourlyChart";

const CardRows = (first, second = "-") => <Row>
    <Col>
        <b>
            {first}
        </b>
    </Col>
    <Col>
        {second}
    </Col>
</Row>

export default function BasicData(props) {

    const { apiData } = props;

    const cityName = apiData?.name ?? null;
    const coord = apiData?.coord ?? { lat: null, lon: null };

    const description = apiData?.weather?.[0]?.description ?? null;
    const feelsLike = apiData?.main?.feels_like ?? null;
    const humidity = apiData?.main?.humidity ?? null;
    const temperature = apiData?.main?.temp ?? null;
    const maxTemperature = apiData?.main?.temp_max ?? null;
    const minTemperature = apiData?.main?.temp_min ?? null;

    return <Container>
        <Row>
            <Col>
                <Card style={{ backgroundColor: "rgb(188 223 243)" }}>
                    <Card.Body>

                        {
                            cityName ?

                                <Card.Title style={{ fontSize: "28px", textDecoration: "underline" }}>
                                    Current Weather of <span style={{ color: "#8a1292" }}>{cityName}</span>
                                </Card.Title>

                                :

                                <Card.Title>
                                    Current Weather
                                </Card.Title>
                        }

                        {/* CARD DATA */}
                        <Card.Text>
                            <Container fluid>
                                {CardRows("Latitude", coord.lat)}
                                {CardRows("Longitude", coord.lon)}
                                {CardRows("Description", description)}
                                {CardRows("Feels", feelsLike)}
                                {CardRows("Humidity", humidity)}
                                {CardRows("Temperature", temperature)}
                                {CardRows("Max. Temperature", maxTemperature)}
                                {CardRows("Min. Temperature", minTemperature)}

                            </Container>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row style={{ height: "60px" }} />
        <Row className="justify-content-md-center" xs={1} sm={1} xl={2}>
            <Col >
                <HourlyChart oneData={props.oneData} />
            </Col>
            <Col >
                <DaysChart oneData={props.oneData} />
            </Col>
        </Row>
    </Container>
}