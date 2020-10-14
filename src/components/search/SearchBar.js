import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Button, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./SearchBar.css";
import { data, isNumeric } from "jquery";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    var userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    var petition = "http://api.openweathermap.org/data/2.5/weather?";
    if (isNumeric(this.state.value)) {
      petition += "zip=" + this.state.value;
    } else {
      petition += "q=" + this.state.value;
    }
    petition +=
      "&lang=" + userLang + "&appid=fa434a1029aeb18262dcd765c962a7c2";
    fetch(petition).then(response => response.json()).then(data => alert(data.name +" "+data.weather[0].main));
    //alert(data.name +" "+data.weather[0].main);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Ciudad"
            />
          </Col>
          <Col>
            <Button type="submit" value="Submit">
              <Search />
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default SearchBar;
