import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import styles from "../styles/DetailMainStyle";

export default class DetailMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconWeatherMain: this.props.iconWeatherMain,
      tempWeatherMain: this.props.tempWeatherMain,
      desWeatherMain: this.props.desWeatherMain,
      humidityWeatherMain: this.props.humidityWeatherMain,
      windWeatherMain: this.props.windWeatherMain
    };
  };

  function getlink (id) {
    if (id == "01d") {
      link = require("../../img/if_weather/01n.png");
      console.log(link);
    } else if (id == "01n") {
      link = require("../../img/if_weather/01n.png");
    } else if (id == "02d") {
      link = require("../../img/if_weather/02d.png");
    } else if (id == "02n") {
      link = require("../../img/if_weather/02n.png");
    } else if (id == "03d") {
      link = require("../../img/if_weather/03d.png");
    } else if (id == "03n") {
      link = require("../../img/if_weather/03n.png");
    } else if (id == "04d") {
      link = require("../../img/if_weather/04d.png");
    } else if (id == "04n") {
      link = require("../../img/if_weather/04n.png");
    } else if (id == "09d") {
      link = require("../../img/if_weather/09d.png");
    } else if (id == "09n") {
      link = require("../../img/if_weather/09n.png");
    } else if (id == "10d") {
      link = require("../../img/if_weather/10d.png");
    } else if (id == "10n") {
      link = require("../../img/if_weather/10n.png");
    } else if (id == "11d") {
      link = require("../../img/if_weather/11n.png");
    } else if (id == "13d") {
      link = require("../../img/if_weather/13d.png");
    } else if (id == "13n") {
      link = require("../../img/if_weather/13n.png");
    } else if (id == "50dn") {
      link = require("../../img/if_weather/50n.png");
    } else {
      link = require("../../img/if_weather/10n.png");
    }
    return link;
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewInside}>
          <View style={styles.Weather}>
            <View style={styles.WeatherIcon}>
              <Image
                style={styles.img_iconID}
                source={this.getlink(this.state.iconWeatherMain)}
              />
            </View>

            <View style={styles.WeatherTemp}>
              
              <Text style={styles.TextWeatherTemp}>{this.state.tempWeatherMain}</Text>
              <Text style={styles.TextWeatherTempC}>°C</Text>

            </View>
          </View>

          <View style={styles.WeatherDes}>
            <Text style={styles.TextWeatherDes}>{this.state.desWeatherMain}</Text>
          </View>

          <View style={styles.WeatherInfo}>
            <View style={styles.WeatherInfoHumid}>
              <Text style={styles.TextWeatherInfoHumid}>☂ {this.state.humidityWeatherMain}%</Text>
            </View>

            <View style={styles.WeatherInfoWind}>
              <Text style={styles.TextWeatherInfoWind}>≋ {this.state.windWeatherMain}m/s</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
