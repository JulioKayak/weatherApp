import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./CityBox.css";

class CityBox extends React.Component {
  render() {
    return (
      <Card 
        md="auto"
        className="cityBox"
        style={{ backgroundColor: "#AB918C" }}
      >
        <Card.Header className="cHeader">
          {this.props.weatherCityName}
          <img
            className="weatherIcon"
            alt="Weather icon matching current weather"
            src="http://openweathermap.org/img/wn/10d@2x.png"
          />
        </Card.Header>
        <Card.Body className="justify-content-md-center">
          <Row>
            <Col>
              <Row className="cabecera">
                <FormattedMessage id="citybox.description"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center">{this.props.weatherDescription}</Row>
            </Col>
            <Col md="auto">
              <Row className="cabecera">
                <FormattedMessage id="citybox.windspeed"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center"> {this.props.weatherWindSpeed} m/s</Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="cabecera">
                <FormattedMessage id="citybox.temperature"></FormattedMessage>
              </Row>
              <Row  className="justify-content-md-center">{this.props.weatherTemp} ºC</Row>
            </Col>
            <Col md="auto">
              <Row className="cabecera">
                <FormattedMessage id="citybox.weatherfeelslike"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center">{this.props.weatherFeelsLike} ºC</Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CityBox;
