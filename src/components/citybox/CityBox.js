import React from "react";
import "./CityBox.css";

class CityBox extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-centered">{this.props.weatherCityName}</div>
      </div>
    );
  }
}

export default CityBox;
