import React, { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View_main: {
    flex: 1,
    flexDirection: "row"
  },
  TouchArrowBack: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  ArrowBack: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  ViewtitleName: {
    flex: 4,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  TextTitleName: {
    fontSize: 25
  },

  loveBtn: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  loveIcon: {
    fontSize: 20,
    fontWeight: 'bold',

  }
});

export default styles;
