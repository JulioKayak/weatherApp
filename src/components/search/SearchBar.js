import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { Button, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./SearchBar.css";

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
  handleSubmit(event){
    event.preventDefault();
    //alert("Child this.state.value: "+this.state.value);
    this.props.fetchData(this.state.value);
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

