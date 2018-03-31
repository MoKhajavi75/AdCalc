import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

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
    _Login: { screen: Login },
    _Register: { screen: Register }
  },

  {
    initialRouteName: "_Login",
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
    initialRouteName: "_first"
  }
);

export default MainStack;
