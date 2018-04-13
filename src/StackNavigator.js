import { StackNavigator } from "react-navigation";

import { Home } from "./Home";
import { Detail } from "./Detail";
import { DetailTop } from "./component/DetailTop";

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        header: null,
      },
    },
    DetailTop: {
      screen: DetailTop,
    },
  },
  {
    initialRouteName: "Home",
  },
);
