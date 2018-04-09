import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "../styles/DetailMainStyle";

var link = require("../../img/if_weather/01d.png");

export default class DetailMain extends Component {
  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewInside}>

          <View style={styles.Weather}>
            
            <View style={styles.WeatherIcon}>
              <Text>hello</Text>
            </View>

            <View style={styles.WeatherTemp}>
              <Text>hello</Text>
            </View>

          </View>

          <View style={styles.WeatherDes}>
            <Text>hello</Text>
          </View>

          <View style={styles.WeatherInfo}>
          <View style={styles.WeatherInfoHumid}>
              <Text>hello</Text>
            </View>

            <View style={styles.WeatherInfoWind}>
              <Text>hello</Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}
