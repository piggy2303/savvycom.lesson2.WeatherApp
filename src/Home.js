import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import PTRView from "react-native-pull-to-refresh";

import HomeItem from "./component/HomeItem";
import styles from "./styles/HomeStyle";
import HomeHeaderBar from "./component/HomeHeaderBar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      cities: [
        { name: "singapore" },
        { name: "tokyo" },
        { name: "cairo" },
        { name: "toronto" },
        { name: "London" },
        { name: "Hanoi" },
        { name: "Saigon" },
        { name: "Istanbul" },
        { name: "Danang" },
        { name: "London" },
        { name: "Hanoi" },
        { name: "Saigon" },
        { name: "Istanbul" },
        { name: "Danang" }
      ]
    };
  }
  static navigationOptions = {
    header: null
  };

  _refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
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
        <View style={styles.Header_bar}>
          <HomeHeaderBar />
        </View>
        <PTRView onRefresh={this._refresh}>
          <FlatList
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
            keyExtractor={(item, index) => index}
          />
        </PTRView>
      </View>
    );
  }
}
