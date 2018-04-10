import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";
import styles from "../styles/HomeItemStyle";

export default class HomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:"http://api.openweathermap.org/data/2.5/forecast?&APPID=bd5e378503939ddaee76f12ad7a97608&q=",
      cityName: this.props.cityName,
      isLoading: true,
    };
  }

  getlink = (id) => {
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
  }

  getDatafromAPI = () => {
    fetch(this.state.url + this.state.cityName)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            cityName: responseJson.city.name.toUpperCase(),
            temp: parseInt(responseJson.list[0].main.temp - 273),
            nation: responseJson.city.country,
            iconID: responseJson.list[0].weather[0].icon,
            description: responseJson.list[0].weather[0].description
          },
          function() {}
        );
      })
      // .then(() => {
      //   this.getlink(this.state.iconID);
      // })
      // .then(() => {
      //   this.setState({
      //     isLoading: false
      //   });
      // })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.getDatafromAPI();
  }
  // componentWillUpdate(){
  //   this.getDatafromAPI();
  // }

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
          <Text style={styles.text_nation}>{this.state.nation}</Text>
        </View>

        <View style={styles.child_view_middle}>
          <Image style={styles.img_iconID} source={this.getlink(this.state.iconID)} />
        </View>

        <View style={styles.child_view_right_parent}>
          <View style={styles.child_view_right}>
            <Text style={styles.text_temp}>{this.state.temp}</Text>
            <Text style={styles.text_temp_C}>°C</Text>
          </View>
          <Text style={styles.text_description}>{this.state.description}</Text>
        </View>

      </View>
    );
  }
}
