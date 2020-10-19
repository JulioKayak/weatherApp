import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import {FormattedMessage} from 'react-intl';
import "./CityBox.css";

class CityBox extends React.Component {
  render() {
    return (
      <Card className="cityBox" style={{backgroundColor:'#AB918C' }}>
        <Card.Header className="cHeader">{this.props.weatherCityName} 
        <img className="weatherIcon" alt="Weather icon matching current weather" src ="http://openweathermap.org/img/wn/10d@2x.png"/>
        </Card.Header>
        <Row className="cabecera">
          <Col><FormattedMessage id='citybox.description'></FormattedMessage></Col>
          <Col><FormattedMessage id='citybox.windspeed'></FormattedMessage></Col>
          </Row>
        <Row>
          <Col>{this.props.weatherDescription}</Col>
          <Col>{this.props.weatherWindSpeed} m/s</Col>
        </Row>
        <Row className="cabecera">
          <Col><FormattedMessage id='citybox.temperature'></FormattedMessage></Col>
          <Col md="auto"><FormattedMessage id='citybox.weatherfeelslike'></FormattedMessage></Col></Row>
        <Row>
          <Col>{this.props.weatherTemp} ºC</Col>
          <Col>{this.props.weatherFeelsLike} ºC</Col>
        </Row>
      </Card>
    );
  }
}

export default CityBox;
