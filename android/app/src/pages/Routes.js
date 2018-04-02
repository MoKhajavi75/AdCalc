import React, { Component } from "react";
import { StackNavigator, TabNavigator, tabBarOptions } from "react-navigation";

import HomeScreen from "./HomeScreen.js";
import Register from "./Register.js";
import Login from "./Login.js";
import Intro from "./Intro.js";

const _Temp = StackNavigator(
  {
    _Intro: { screen: Intro }
  },

  {
    initialRouteName: "_Intro"
  }
);

const regStack = TabNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },

  {
    initialRouteName: "Login",
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#F0FFFF",
      inactiveTintColor: "#87CEEB",
      indicatorStyle: {
        backgroundColor: "#F0FFFF",
        height: 1
      },
      style: {
        backgroundColor: "#2C3E50"
      }
    },
    animationEnabled: true,
    swipeEnabled: true,
    lazy: false
  }
);

const RootStack = StackNavigator(
  {
    _HomeScreen: { screen: HomeScreen }
  },

  {
    initialRouteName: "_HomeScreen"
  }
);

const MainStack = StackNavigator(
  {
    _first: { screen: _Temp },
    _second: { screen: regStack },
    _third: { screen: RootStack }
  },

  {
    initialRouteName: "_second"
  }
);

export default MainStack;
