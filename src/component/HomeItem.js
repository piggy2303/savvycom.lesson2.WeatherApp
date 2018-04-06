import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../styles/HomeItemStyle";

export default class HomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "http://api.openweathermap.org/data/2.5/forecast?&APPID=b1759401ae8af65fcfc7b6f92363aa84&q=",
      cityName: this.props.cityName,
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch(this.state.url + this.state.cityName)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            temp: parseInt(responseJson.list[0].main.temp - 273)
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.View_City}>
        <TouchableOpacity>
          <View >
            
            <Text>{this.state.cityName}</Text>
            <Text>{this.state.temp}</Text>
           
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
