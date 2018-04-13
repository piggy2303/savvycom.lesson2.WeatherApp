import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewMain: {
    flex: 1,
    flexDirection: "column",

    marginLeft: 5,
    marginRight: 3,
    marginBottom: 30,
    opacity: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 85,
    width: 85,
  },
  ViewTemp: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  TextDes: {
    fontSize: 10,
    color: "rgb(187,222,251)",
  },
  TextTemp: {
    fontSize: 18,
    color: "rgb(187,222,251)",
  },
});

export default styles;
