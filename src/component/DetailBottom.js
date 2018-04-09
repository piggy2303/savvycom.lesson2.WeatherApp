import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import DetailBottom_Nextday from './DetailBottom_Nextday';
import styles from '../styles/DetailBottomStyle';

export default class DetailBottom extends Component {
  render() {
    return (
      <View style = {styles.ViewMain}>
        <DetailBottom_Nextday/>
        <DetailBottom_Nextday/>
        <DetailBottom_Nextday/>
      </View>
    );
  }
}
