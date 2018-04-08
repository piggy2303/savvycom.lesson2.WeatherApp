import React, { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  View_Main: {
    flex: 1,
    marginLeft: 5,
    marginRight: 7,
    flexDirection: "row"
  },
  View_NameApp: {
    flex: 4,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  Text_NameApp: {
    fontSize: 23,
    marginLeft: 17,
    color: "rgb(187,222,251)"
  },
  View_TouchAdd: {
    flex: 1
  },
  TouchAdd: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Addbtn: {
    fontSize: 32,
    color: "rgb(187,222,251)"
  }
});

export default styles;
