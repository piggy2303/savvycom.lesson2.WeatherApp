import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ImageBackground,
  Dimensions
} from "react-native";

import DetailTop from "./component/DetailTop";
import DetailMain from "./component/DetailMain";
import DetailBottom from "./component/DetailBottom";

import styles from "./styles/DetailStyle";

export default class Detail extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      url:
        "http://api.openweathermap.org/data/2.5/forecast?&APPID=b1759401ae8af65fcfc7b6f92363aa84&q=",
      cityName: "Hanoi",
      isLoading: true
    };
  }

  getlink;

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const cityNameOBJ = params ? params.data : null;
    let cityNameOBJString = JSON.stringify(cityNameOBJ);
    let cityNameArry = cityNameOBJString.split('"');
    let cityName = cityNameArry[3];

    return fetch(this.state.url + cityName)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            cityName: cityName,
            isLoading: false,
            //weather: responseJson.list[0].main

            //weather main
            iconWeatherMain: responseJson.list[0].weather[0].icon,
            tempWeatherMain: parseInt(responseJson.list[0].main.temp - 273),
            desWeatherMain: responseJson.list[0].weather[0].description,
            humidityWeatherMain: responseJson.list[0].main.humidity,
            windWeatherMain: parseInt(responseJson.list[0].wind.speed),

            //weather day 1
            day1IconWeatherMain: responseJson.list[3].weather[0].icon,
            day1TempWeatherMain: parseInt(responseJson.list[3].main.temp - 273),
            day1DesWeatherMain: responseJson.list[3].weather[0].description,
            //weather day 2
            day2IconWeatherMain: responseJson.list[11].weather[0].icon,
            day2TempWeatherMain: parseInt(
              responseJson.list[11].main.temp - 273
            ),
            day2DesWeatherMain: responseJson.list[11].weather[0].description,

            //weather day 3
            day3IconWeatherMain: responseJson.list[15].weather[0].icon,
            day3TempWeatherMain: parseInt(
              responseJson.list[15].main.temp - 273
            ),
            day3DesWeatherMain: responseJson.list[15].weather[0].description
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
      <ImageBackground
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height
        }}
        source={require("../img/night.jpg")}
      >
        <View style={styles.View_Main}>
          <View style={styles.DetailTop}>
            <DetailTop
              titleName={this.state.cityName}
              navigate={this.props.navigation.navigate}
              destination="Home"
            />
          </View>
          <View style={styles.DetailMain}>
            <DetailMain
              iconWeatherMain={this.state.iconWeatherMain}
              tempWeatherMain={this.state.tempWeatherMain}
              desWeatherMain={this.state.desWeatherMain}
              humidityWeatherMain={this.state.humidityWeatherMain}
              windWeatherMain={this.state.windWeatherMain}
            />
          </View>
          <View style={styles.DetailBottom}>
            <DetailBottom
              day1IconWeatherMain={this.state.day1IconWeatherMain}
              day1TempWeatherMain={this.state.day1TempWeatherMain}
              day1DesWeatherMain={this.state.day1DesWeatherMain}
              day2IconWeatherMain={this.state.day2IconWeatherMain}
              day2TempWeatherMain={this.state.day2TempWeatherMain}
              day2DesWeatherMain={this.state.day2DesWeatherMain}
              day3IconWeatherMain={this.state.day3IconWeatherMain}
              day3TempWeatherMain={this.state.day3TempWeatherMain}
              day3DesWeatherMain={this.state.day3DesWeatherMain}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
