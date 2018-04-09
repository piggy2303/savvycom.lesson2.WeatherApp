import React, { Component } from "react";
import { Image, View, Text } from "react-native";

import styles from "../styles/DetailBottom_NextdayStyle";
export default class DetailBottomNextday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IconWeatherMain: this.props.IconWeatherMain,
      TempWeatherMain: this.props.TempWeatherMain,
      DesWeatherMain: this.props.DesWeatherMain
    };
  }

  getlink = id => {
    if (id == "01d") {
      link = require("../../img/if_weather/01d.png");
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
        <View style={{ flex: 1 }}>
          <Image
            style={styles.icon}
            source={this.getlink(this.state.IconWeatherMain)}
          />
        </View>

        <View style={styles.ViewTemp}>
          <Text style={styles.TextDes}>{this.state.DesWeatherMain}</Text>
          <Text style={styles.TextTemp}>{this.state.TempWeatherMain}°C</Text>
        </View>
      </View>
    );
  }
}
