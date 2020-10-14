import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CityBox from "./components/citybox/";
import Search from "./components/search";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className='mt-3'> 
      <Row>
        <Col></Col>
        <Col xs={2}>
          <Search></Search>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default App;
