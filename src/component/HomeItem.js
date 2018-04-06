import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/HomeItemStyle";

export default class HomeItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.View_City}>
        <TouchableOpacity>
          <View>
            <Text> {this.props.name} </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
