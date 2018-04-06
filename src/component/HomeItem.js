import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/HomeItemStyle";

export default class HomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url :"http://api.openweathermap.org/data/2.5/forecast?&APPID=b1759401ae8af65fcfc7b6f92363aa84&q=",
      cityName: this.props.cityName,
      isLoading: true
     };
  }


  render() {
    return (
      <View style={styles.View_City}>
        <TouchableOpacity>
          <View>
            <Text> {this.state.cityName} </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
