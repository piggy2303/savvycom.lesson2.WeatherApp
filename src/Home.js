import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

import HomeItem from "./component/HomeItem";
import styles from "./styles/HomeStyle";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        { name: "london" },
        { name: "hanoi" },
        { name: "saigon" },
        { name: "saigon" }
      ]
    };
  }
  static navigationOptions = {
    header: null
  };
  


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.View_Main}>
        <FlatList
          data={this.state.cities}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail", { data : item })}
            >
              <HomeItem cityName={item.name} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
