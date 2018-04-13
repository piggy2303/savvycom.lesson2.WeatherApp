import React, { Component } from "react";
import { View } from "react-native";

import { DetailBottomNextday } from "./DetailBottomNextday";
import styles from "../styles/DetailBottomStyle";

export default class DetailBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    this.setState({
      day1IconWeatherMain: this.props.day1IconWeatherMain,
      day1TempWeatherMain: this.props.day1TempWeatherMain,
      day1DesWeatherMain: this.props.day1DesWeatherMain,

      day2IconWeatherMain: this.props.day2IconWeatherMain,
      day2TempWeatherMain: this.props.day2TempWeatherMain,
      day2DesWeatherMain: this.props.day2DesWeatherMain,

      day3IconWeatherMain: this.props.day3IconWeatherMain,
      day3TempWeatherMain: this.props.day3TempWeatherMain,
      day3DesWeatherMain: this.props.day3DesWeatherMain,
    });
  }

  render() {
    return (
      <View style={styles.ViewMain}>
        <DetailBottomNextday
          IconWeatherMain={this.state.day1IconWeatherMain}
          TempWeatherMain={this.state.day1TempWeatherMain}
          DesWeatherMain={this.state.day1DesWeatherMain}
        />
        <DetailBottomNextday
          IconWeatherMain={this.state.day2IconWeatherMain}
          TempWeatherMain={this.state.day2TempWeatherMain}
          DesWeatherMain={this.state.day2DesWeatherMain}
        />

        <DetailBottomNextday
          IconWeatherMain={this.state.day3IconWeatherMain}
          TempWeatherMain={this.state.day3TempWeatherMain}
          DesWeatherMain={this.state.day3DesWeatherMain}
        />
      </View>
    );
  }
}
