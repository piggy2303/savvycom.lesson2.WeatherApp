import React, { Component } from "react";
import { View, Text, Button,ActivityIndicator } from "react-native";


export default class Detail extends Component {
  static navigationOptions = {
    title: "Thong tin chi tiet"
  };

  constructor(props) {
    super(props);
    this.state = {
      url :"http://api.openweathermap.org/data/2.5/forecast?&APPID=b1759401ae8af65fcfc7b6f92363aa84&q=",
      cityName: "",
      isLoading: true
     };
  }

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
                weather: responseJson.list[0].main
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
      <View>
        <Text>itemId: {this.state.cityName}</Text>
        <Text>itemId:{parseInt(this.state.weather.temp - 273)}</Text>
      </View>
    );
  }
}
