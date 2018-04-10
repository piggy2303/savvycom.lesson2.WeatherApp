import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../styles/DetailTopStyle";

export default class DetailTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleName : this.props.titleName.toUpperCase(),
      isLove : false
    };
  }

  onPressLove = ()=>{
    this.setState({
      isLove : !this.state.isLove
    })
  }
  

  render() {
    return (
      <View style={styles.View_main}>
        <TouchableOpacity
            onPress={() => this.props.navigate(this.props.destination) }
          style={styles.TouchArrowBack}
          >
          <Text style={styles.ArrowBack}>←</Text>
        </TouchableOpacity>
        <View style={styles.ViewtitleName}>
          <Text style={styles.TextTitleName}>{this.state.titleName}</Text>
        </View>
        <TouchableOpacity 
        style={styles.loveBtn}
        onPress={this.onPressLove}
        >
          <Text style={ this.state.isLove ? styles.loveIconTrue:styles.loveIcon}>♥</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
