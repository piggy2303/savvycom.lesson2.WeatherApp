import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Home from "./Home";
import Detail from "./Detail";

export default StackNavigator(
    {
        Home: {
            screen: Home
        },
        Detail: {
            screen: Detail
        }
    },
    {
        initialRouteName: "Detail"
    }
);
