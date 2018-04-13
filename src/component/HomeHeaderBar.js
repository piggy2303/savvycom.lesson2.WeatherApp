import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../styles/HomeHeaderBarStyle";

export default class HomeHeaderBar extends Component {
  render() {
    return (
      <View style={styles.View_Main}>
        <View style={styles.View_NameApp}>
          <Text style={styles.Text_NameApp}>WeatherForecast</Text>
        </View>
        <View style={styles.View_TouchAdd}>
          <TouchableOpacity style={styles.TouchAdd}>
            <Text style={styles.Addbtn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
