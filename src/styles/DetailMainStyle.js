import React, { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgb(33,150,243)",
    // opacity: 0.8,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  ViewInside: {
    
    // backgroundColor: "red",
    
    flex: 1,
    width: 250,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  Weather: {
    // backgroundColor: "blue",
    flex: 2.5,
    flexDirection: "row"
  },
  WeatherIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"center",
    // backgroundColor: "red",
  },
  img_iconID: {
    width: 150,
    height: 150,
  },

  WeatherTemp: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "center"

  },
  TextWeatherTemp:{
    fontSize: 50,
    color: "rgb(187,222,251)"
  },

  TextWeatherTempC:{
    fontSize: 30,
    color: "rgb(187,222,251)"
  },


  WeatherDes: {
    // backgroundColor: "white",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  TextWeatherDes: {
    // backgroundColor: "white",
    fontSize: 20,
    color: "rgb(187,222,251)"
  },

  WeatherInfo: {
    // backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row"

  },
  WeatherInfoHumid: {
    flex: 1,
    alignItems: 'center',

    // backgroundColor: "red",
  },
  TextWeatherInfoHumid: {
    // backgroundColor: "white",
    fontSize: 15,
    color: "rgb(187,222,251)"
  },

  WeatherInfoWind: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: "yellow",
  },
  TextWeatherInfoWind: {
    // backgroundColor: "white",
    fontSize: 15,
    color: "rgb(187,222,251)"
  },
});

export default styles;
