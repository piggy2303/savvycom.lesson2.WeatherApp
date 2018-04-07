import React, { Component } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator ,Image} from "react-native";
import styles from "../styles/HomeItemStyle";

export default class HomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "http://api.openweathermap.org/data/2.5/forecast?&APPID=b1759401ae8af65fcfc7b6f92363aa84&q=",
      cityName: this.props.cityName,
      isLoading: true,
      
    };
  }

  componentDidMount() {
    return fetch(this.state.url + this.state.cityName)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            cityName: responseJson.city.name.toUpperCase(),
            temp: parseInt(responseJson.list[0].main.temp - 273),
            nation: responseJson.city.country,
            iconID : "../../img/if_weather/"+responseJson.list[0].weather[0].icon+".png",
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
      <View style={styles.View_main}>
        <View style={styles.child_view_left}>
          <Text style={styles.text_city_name}>{this.state.cityName} </Text>
          <Text style={styles.text_nation}>,{this.state.nation}</Text>
        </View>

        <View style={styles.child_view_middle}>
          <Text style={styles.text_temp}>{this.state.temp}</Text>
          <Image
            style={{width: 15, height: 15}}
            source={require("../../img/celsius"+"." +"png")}
          />
        </View>

        <View style={styles.child_view_right}>
          <Image
            style={{width: 40, height: 40}}
            source={require(""+this.state.iconID+"")}
          />
          
        </View>
      </View>
    );
  }
}
