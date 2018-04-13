import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  AsyncStorage
} from "react-native";
import PTRView from "react-native-pull-to-refresh";
import HomeItem from "./component/HomeItem";
import styles from "./styles/HomeStyle";
import HomeHeaderBar from "./component/HomeHeaderBar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    const cities = [
      { name: "singapore" },
      { name: "tokyo" },
      { name: "cairo" },
      { name: "toronto" },
      { name: "London" },
      { name: "Moscow" }
      // { name: "JAKARTA" },
      // { name: "ROME" },
      // { name: "PARIS" },
      // { name: "MADRID" },
    ];
    this.state = {
      isReloading: false,
      isLoading: false,
      cities: cities
    };
  }
  componentWillMount() {
    console.log("componentWillMount");
    AsyncStorage.getItem("storage", (error, result) => {
      if (error) {
        console.log(error);
      }

      console.log("componentWillMount", result);
    });
  }
  copyState = () => {
    const { cities } = this.state;
    let randomcity = Math.floor(Math.random() * 5 + 1);
    if (randomcity == 1) {
      cities.push({ name: "hanoi" });
    } else if (randomcity == 2) {
      cities.push({ name: "JAKARTA" });
    } else if (randomcity == 3) {
      cities.push({ name: "ROME" });
    } else if (randomcity == 4) {
      cities.push({ name: "PARIS" });
    } else if (randomcity == 5) {
      cities.push({ name: "MADRID" });
    }
    // cities.push({name:"hanoi"});
    // // cities.pop();

    this.setState({
      isReloading: false,
      cities: cities.slice(0)
    });
    console.log(JSON.stringify(cities));
    AsyncStorage.setItem("storage", JSON.stringify(cities), err => {
      console.log(err);
    });
  };

  async addCity() {
    console.log(cities);

    cities = this.state.cities.push({ name: "hanoi" }).slice(0);

    await AsyncStorage.setItem("cities", JSON.stringify(cities));
    console.log(cities);

    this.updateCities();
  }

  async updateCities() {
    let response = await AsyncStorage.getItem("cities");

    let citiess = await JSON.parse(response);

    // this.setState({
    //   isReloading:false,
    //   cities = citiess.slice(0)
    // })
  }
  componentDidUpdate() {
    // this.updateCities();
    AsyncStorage.getItem("storage", (error, result) => {
      if (error) {
        console.log(error);
      }

      console.log("componentWillMount", result);
    });
  }

  //

  handleRefesh = () => {
    this.setState({
      isReloading: true
    });
    this.copyState();
  };

  render() {
    console.log("render");
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
          <View style={styles.Header_bar}>
            <HomeHeaderBar />
          </View>

          <FlatList
            style={{ flex: 1, marginBottom: 10 }}
            refreshing={this.state.isReloading}
            onRefresh={this.handleRefesh}
            data={this.state.cities}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.Touch_main}
                onPress={() =>
                  this.props.navigation.navigate("Detail", { data: item })
                }
              >
                <HomeItem ref="HomeItem" cityName={item.name} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ImageBackground>
    );
  }
}
