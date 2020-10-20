import React from "react";
import "./App.css";
import CityBox from "./components/citybox";
import Search from "./components/searchbar";
import { Row } from "react-bootstrap";
import { isNumeric } from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCityName: "",
      weatherId: "",
      weatherDescription: "",
      weatherTemp: "",
      weatherFeelsLike: "",
      weatherWindSpeed: "",
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData = (city) => {
    var userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    var petition = "http://api.openweathermap.org/data/2.5/weather?";
    if (isNumeric(city)) {
      petition += "zip=" + city + ",es";
    } else {
      petition += "q=" + city;
    }
    petition += "&lang=" + userLang + "&appid=fa434a1029aeb18262dcd765c962a7c2&units=metric";
    fetch(petition)
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line
        if (data.cod != 404 && data.cod != 400) {
          this.setState({
            weatherCityName: data.name,
            weatherId: data.weather[0].id,
            weatherDescription:
              data.weather[0].description.slice(0, 1).toUpperCase() +
              data.weather[0].description.slice(
                1,
                data.weather[0].description.length
              ),
            weatherTemp: data.main.temp,
            weatherFeelsLike: data.main.feels_like,
            weatherWindSpeed: data.wind.speed,
          });
        } else {
          this.setState({
            weatherCityName: "",
            weatherId: "",
            weatherDescription: "",
            weatherTemp: "",
            weatherFeelsLike: "",
            weatherWindSpeed: "",
          });
        }
      });
  };

  render() {
    return (
      <div className="mt-3">
        <Row className="justify-content-md-center" style={{marginBottom:"50px"}}>
            <Search fetchData={this.fetchData}></Search>
        </Row>
        <Row className="justify-content-md-center">
            {this.state.weatherCityName ? (
              <CityBox {...this.state}></CityBox>
            ) : null}
        </Row>
      </div>
    );
  }
}

export default App;
