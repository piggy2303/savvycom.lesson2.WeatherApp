import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../styles/DetailTopStyle";

export default class DetailTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.View_main}>
        <TouchableOpacity style={styles.TouchArrowBack}>
          <Text style={styles.ArrowBack}>←</Text>
        </TouchableOpacity>
        <View style={styles.ViewtitleName}>
          <Text style={styles.TextTitleName}>{this.props.titleName}</Text>
        </View>
        <TouchableOpacity style={styles.loveBtn}>
          <Text style={styles.loveIcon}>♥</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
