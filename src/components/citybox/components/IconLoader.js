import React from "react";

class IconLoader extends React.Component {
  selectImage = () => {
    var now = new Date().getHours();
    var day = "";
    7 <= now && now <= 10 ? (day = "d") : (day = "n");
    var imgHead = "http://openweathermap.org/img/wn/";
    var imgBody = "";
    var imgTail = day + "@2x.png";
    switch (true) {
      /*01*/ case this.props.weatherId == 800:
        imgBody = "01";
        break;
      /*02*/ case this.props.weatherId == 801:
        imgBody = "02";
        break;
      /*03*/ case this.props.weatherId == 802:
        imgBody = "03";
        break;
      /*04*/ case this.props.weatherId == 803 || this.props.weatherId == 804:
        imgBody = "04";
        break;
      /*09*/ case (300 <= this.props.weatherId &&
        this.props.weatherId <= 321) ||
        (520 <= this.props.weatherId && this.props.weatherId <= 531):
        imgBody = "09";
        break;
      /*10*/ case 500 <= this.props.weatherId && this.props.weatherId <= 504:
        imgBody = "10";
        break;
      /*11*/ case 200 <= this.props.weatherId && this.props.weatherId <= 232:
        imgBody = "11";
        break;
      /*13*/ case this.props.weatherId == 511 ||
        (600 <= this.props.weatherId && this.props.weatherId <= 622):
        imgBody = "13";
        break;
      /*50*/ case 700 <= this.props.weatherId && this.props.weatherId <= 781:
        imgBody = "50";
        break;
      default:
        break;
    }
    var img = imgHead + imgBody + imgTail;
    return img;
  };

  render() {
    return <img
        className="weatherIcon"
        alt="Weather icon matching current weather"
        src={this.selectImage()}
      />;
  }
}

export default IconLoader;
