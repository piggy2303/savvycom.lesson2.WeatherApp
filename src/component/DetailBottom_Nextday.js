import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "../styles/DetailBottom_NextdayStyle";
export default class DetailBottomNextday extends Component {
  render() {
    return (
      <View style = {styles.ViewMain}>
        <View style = {{flex : 1}}>
          <Text>hello</Text>
        </View>

        <View style = {{flex : 1}}>
          <Text>hello</Text>
        </View>

      </View>
    );
  }
}
