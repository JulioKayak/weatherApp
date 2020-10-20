import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./CityBox.css";
import IconLoader from "./components/IconLoader";

class CityBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherId : this.props.weatherId,
    }
  }
  render() {
    return (
      <Card 
        md="auto"
        className="cityBox"
        style={{ backgroundColor: "#AB918C" }}
      >
        <Card.Header className="cHeader">
          {this.props.weatherCityName}
          <IconLoader {...this.state}></IconLoader>

        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.description"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center datos">{this.props.weatherDescription}</Row>
            </Col>
            <Col md="auto">
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.windspeed"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center datos"> {this.props.weatherWindSpeed} m/s</Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.temperature"></FormattedMessage>
              </Row>
              <Row  className="justify-content-md-center datos">{this.props.weatherTemp} ºC</Row>
            </Col>
            <Col md="auto">
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.weatherfeelslike"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center ">{this.props.weatherFeelsLike} ºC</Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CityBox;
