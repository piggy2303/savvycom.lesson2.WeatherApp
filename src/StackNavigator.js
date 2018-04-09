import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Home from "./Home";
import Detail from "./Detail";
import DetailTop from './component/DetailTop';

export default StackNavigator(
    {
        Home: {
            screen: Home
        },
        Detail: {
            screen: Detail
        },
        DetailTop :{
            screen : DetailTop
        }
    },
    {
        initialRouteName: "Home"
    }
);
