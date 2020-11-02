import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./CityBox.css";

class CityBox extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }
  iconLoad = () => {
    var imgHead = "http://openweathermap.org/img/wn/";
    var imgBody = this.props.weatherIconId;
    var imgTail = "@2x.png";

    var img = imgHead + imgBody + imgTail;
    return img;
  };

  buttonClick(event) {
    event.preventDefault();
    this.props.resetState(this.props.weatherCityName);
  }

  render() {
    var colorsHeader = ["#726a95", "#709fb0", "#a0c1b8", "#f4ebc1", "#c7b0ab"];
    var colorsBody = ["#5a5995", "#619bb0", "#61c1a7", "#f4e186", "#ab918c"];
    var rand = Math.floor(Math.random() * colorsHeader.length);
    var random_color_header = colorsHeader[rand];
    var random_color_body = colorsBody[rand];
    return (
      <Card
        md="auto"
        className="cityBox"
        style={{ backgroundColor: random_color_body }}
      >
        <Card.Header
          className="cHeader"
          style={{
            backgroundColor: random_color_header,
          }}
        >
          {this.props.weatherCityName}
          <img
            className="weatherIcon"
            alt="Weather icon matching current weather"
            src={this.iconLoad()}
          />
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.buttonClick}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Card.Header>
        <Card.Body className="cBody">
          <Row>
            <Col>
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.description"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center datos">
                {this.props.weatherDescription}
              </Row>
            </Col>
            <Col md="auto">
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.windspeed"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center datos">
                {this.props.weatherWindSpeed} m/s
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.temperature"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center datos">
                {this.props.weatherTemp} ºC
              </Row>
            </Col>
            <Col md="auto">
              <Row className="cabecera justify-content-md-center">
                <FormattedMessage id="citybox.weatherfeelslike"></FormattedMessage>
              </Row>
              <Row className="justify-content-md-center ">
                {this.props.weatherFeelsLike} ºC
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CityBox;
