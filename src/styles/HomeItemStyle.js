import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View_main: {
    flex: 1,
    flexDirection: "row",
  },
  child_view_left: {
    flex: 3,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
    marginTop: 5,
  },
  text_city_name: {
    fontSize: 22,
    color: "rgb(187,222,251)",
  },
  text_nation: {
    fontSize: 15,
    color: "rgb(187,222,251)",
  },
  child_view_middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img_iconID: {
    width: 60,
    height: 60,
  },

  child_view_right_parent: {
    flex: 2,
    // backgroundColor: "blue",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  child_view_right: {
    alignItems: "flex-start",
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    marginTop: 0,
    // backgroundColor: "red",
  },
  text_temp: {
    fontSize: 34,
    color: "rgb(187,222,251)",
  },
  text_temp_C: {
    fontSize: 20,
    color: "rgb(187,222,251)",
    marginTop: 5,
  },
  text_description: {
    fontSize: 12,
    color: "rgb(187,222,251)",
    marginRight: 10,
  },
});

export default styles;
