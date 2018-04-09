import React, { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View_main: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgb(63,81,181)",
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
    color: "rgb(187,222,251)"
  },

  ViewtitleName: {
    flex: 4,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
   
  },
  TextTitleName: {
    fontSize: 25,
    color: "rgb(187,222,251)"
  },

  loveBtn: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    
  },
  loveIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "rgb(187,222,251)"

  }
});

export default styles;
