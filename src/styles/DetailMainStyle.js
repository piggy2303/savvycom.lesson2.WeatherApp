import React, { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ViewInside: {
    backgroundColor: "red",
    flex: 1,
    width: 250,
    marginTop: 50,
    marginBottom: 50
  },
  Weather: {
    backgroundColor: "blue",
    flex: 3,
    flexDirection: "row"
  },
  WeatherIcon: {
    flex: 1,
    backgroundColor: "red",
  },
  WeatherTemp: {
    flex: 1,
    backgroundColor: "yellow",
  },
  WeatherDes: {
    backgroundColor: "white",
    flex: 1
  },
  WeatherInfo: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row"
  },
  WeatherInfoHumid: {
    flex: 1,
    backgroundColor: "red",
  },
  WeatherInfoWind: {
    flex: 1,
    backgroundColor: "yellow",
  },
});

export default styles;
