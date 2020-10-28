import React from "react";
import "./App.css";
import CityBox from "./components/citybox";
import Search from "./components/searchbar";
import { Row } from "react-bootstrap";
import { isNumeric } from "jquery";
import bg from "./img/default_background.jpg";

import broken_clouds from "./img/broken_clouds.jpg";
import broken_clouds2 from "./img/broken_clouds2.jpg";
import clear_sky_day from "./img/clear_sky_day.jpeg";
import clear_sky_day2 from "./img/clear_sky_day2.jpeg";
import clear_sky_night from "./img/clear_sky_night.jpg";
import clear_sky_night2 from "./img/clear_sky_nigth2.jpg";
import few_clouds_day from "./img/few_clouds_day.jpg";
import few_clouds_day2 from "./img/few_clouds_day2.jpg";
import few_clouds_night from "./img/few_clouds_night.jpg";
import mist_day from "./img/mist_day.jpg";
import mist_day2 from "./img/mist_day2.jpg";
import mist_day3 from "./img/mist_day3.jpg";
import mist_night from "./img/mist_night.jpg";
import mist_night2 from "./img/mist_night2.jpg";
import rain_day from "./img/rain_day.jpg";
import rain_day2 from "./img/rain_day2.jpg";
import rain_day3 from "./img/rain_day3.jpg";
import rain_day4 from "./img/rain_day4.jpg";
import rain_night from "./img/rain_night.jpg";
import rain_night2 from "./img/rain_night2.jpg";
import rain_night3 from "./img/rain_night3.jpg";
import scattered_clouds from "./img/scattered_clouds.jpg";
import scattered_clouds2 from "./img/scattered_clouds2.jpg";
import snowing from "./img/snowing.jpg";
import snowing2 from "./img/snowing2.jpg";
import snowing3 from "./img/snowing3.jpg";
import thunderstorm from "./img/thunderstorm.jpg";
import thunderstorm2 from "./img/thunderstorm2.jpg";
import thunderstorm3 from "./img/thunderstorm3.jpg";
import thunderstorm4 from "./img/thunderstorm4.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          weatherCityName: "",
          weatherId: "",
          weatherDescription: "",
          weatherTemp: "",
          weatherFeelsLike: "",
          weatherWindSpeed: "",
          weatherIconId: "",
          background: bg,
        },
      ],
    };

    this.fetchData = this.fetchData.bind(this);
    this.setBackground = this.setBackground.bind(this);
    this.resetState = this.resetState.bind(this);
    this.newSearchAndDataFetch = this.newSearchAndDataFetch.bind(this);
    this.resetFullState = this.resetFullState.bind(this);
  }
  setBackground = (iconRaw) => {
    var icon = iconRaw.slice(0, -1);
    var dayIcon = iconRaw.substr(iconRaw.length - 1);
    var day = true;
    dayIcon === "d" ? (day = true) : (day = false);
    var backgroundPath = "";
    var arr = [];
    switch (icon) {
      /*01*/ case "01":
        if (day) {
          arr = [clear_sky_day, clear_sky_day2];
          backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        } else {
          arr = [clear_sky_night, clear_sky_night2];
          backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        }
        break;
      /*02*/ case "02":
        if (day) {
          arr = [few_clouds_day, few_clouds_day2];
          backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        } else {
          backgroundPath = few_clouds_night;
        }
        break;
      /*03*/ case "03":
      /*04*/ case "04":
        arr = [
          broken_clouds,
          broken_clouds2,
          scattered_clouds,
          scattered_clouds2,
        ];
        backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        break;
      /*09*/ case "09":
      /*10*/ case "10":
        if (day) {
          arr = [rain_day, rain_day2, rain_day3, rain_day4];
          backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        } else {
          arr = [rain_night, rain_night2, rain_night3];
          backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        }
        break;
      /*11*/ case "11":
        arr = [thunderstorm, thunderstorm2, thunderstorm3, thunderstorm4];
        backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        break;
      /*13*/ case "12":
        arr = [snowing, snowing2, snowing3];
        backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        break;
      /*50*/ case "50":
        if (day) {
          arr = [mist_day, mist_day2, mist_day3];
          backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        } else {
          arr = [mist_night, mist_night2];
          backgroundPath = arr[Math.floor(Math.random() * arr.length)];
        }
        break;
      default:
        backgroundPath = bg;
        break;
    }
    return backgroundPath;
  };

  fetchData = (city) => {
    var userLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    var petition = "http://api.openweathermap.org/data/2.5/weather?";
    if (isNumeric(city)) {
      petition += "zip=" + city + ",es";
    } else {
      petition += "q=" + city;
    }
    petition +=
      "&lang=" +
      userLang +
      "&appid=fa434a1029aeb18262dcd765c962a7c2&units=metric";
    fetch(petition)
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line
        if (data.cod === 200) {
          const newCity = {
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
            weatherIconId: data.weather[0].icon,
            background: this.setBackground(data.weather[0].icon),
          };
          if (this.state.cities[0].weatherCityName === "") {
            this.setState((state) => ({
              cities: [newCity],
            }));
            window.localStorage.setItem("cities", JSON.stringify([data.name]));
          } else {
            if (
              this.state.cities.find((ciudad) => {
                return ciudad.weatherCityName == data.name;
              }) != null //Si la ciudad existe en el array de estados
            ) {
              const newCities = this.state.cities.filter(
                (ciudad) => ciudad.weatherCityName !== data.name
              );
              if (newCities.length == 0) {
                this.setState((state) => ({
                  cities: [newCity],
                }));
              } else {
                this.setState((state) => ({
                  cities: [...newCities, newCity],
                }));
              }
            } else {
              this.setState((state) => ({
                cities: [...state.cities, newCity],
              }));
            }

            const citieslong = this.state.cities.length;
            //eslint-disable-next-line
            if (citieslong == 1 && citieslong == 0) {
              window.localStorage.setItem(
                "cities",
                JSON.stringify([data.name])
              );
            } else {
              const previousls = JSON.parse(
                window.localStorage.getItem("cities")
              );
              const newls = previousls.filter((ciudad) => ciudad !== data.name);
              newls.push(data.name);
              window.localStorage.setItem("cities", JSON.stringify(newls));
            }
          }
        }
      });
  };
  resetState = (cityName) => {
    const newCities = this.state.cities.filter(
      (cities) => cities.weatherCityName !== cityName
    );
    //eslint-disable-next-line
    if (newCities.length == 0) {
      const defaultCity = {
        weatherCityName: "",
        weatherId: "",
        weatherDescription: "",
        weatherTemp: "",
        weatherFeelsLike: "",
        weatherWindSpeed: "",
        weatherIconId: "",
        background: bg,
      };
      this.setState((state) => ({
        cities: [defaultCity],
      }));
    } else {
      this.setState((state) => ({
        cities: newCities,
      }));
    }
    const newCitiesNames = JSON.parse(
      window.localStorage.getItem("cities")
    ).filter((cityNamels) => cityNamels !== cityName);
    window.localStorage.setItem("cities", JSON.stringify(newCitiesNames));
  };

  resetFullState = () => {
    const defaultCity = {
      weatherCityName: "",
      weatherId: "",
      weatherDescription: "",
      weatherTemp: "",
      weatherFeelsLike: "",
      weatherWindSpeed: "",
      weatherIconId: "",
      background: bg,
    };
    window.localStorage.setItem("cities", JSON.stringify([]));
    this.setState((state) => ({
      cities: [defaultCity],
    }));

  }

  newSearchAndDataFetch = (citiesArray) => {
    this.resetFullState();
    citiesArray.map((city) => this.fetchData(city));
  };

  render() {
    const citieslong = this.state.cities.length;
    const citiesls = JSON.parse(window.localStorage.getItem("cities"));
    return (
      <div
        style={{ paddingLeft: "15px" }}
        className="mt-3"
        script={
          (document.body.style.backgroundImage =
            "url(" + this.state.cities[citieslong - 1].background + ")")
        }
      >
        <Row
          className="justify-content-md-center"
          style={{
            marginBottom: "50px",
            height: "40px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
        >
          <Search newSearchAndDataFetch={this.newSearchAndDataFetch}></Search>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ marginLeft: "0px", marginRight: "0px" }}
        >
          {this.state.cities.map((c) =>
            c.weatherCityName !== "" ? (
              <CityBox {...c} resetState={this.resetState}></CityBox>
            ) : citiesls != null && citiesls !== [] ? (
              citiesls.map(
                (cls) => this.fetchData(cls),
                this.state.cities.map((c) =>
                  c.weatherCityName !== "" ? (
                    <CityBox {...c} resetState={this.resetState}></CityBox>
                  ) : null
                )
              )
            ) : null
          )}
        </Row>
      </div>
    );
  }
}

export default App;
