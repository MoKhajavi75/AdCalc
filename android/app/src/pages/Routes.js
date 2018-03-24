import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen.js';
import Register from './Register.js';
import Login from './Login.js';
import Intro from './Intro.js';


const RootStack = StackNavigator(
  {
    _Intro: { screen: Intro },
    _HomeScreen: { screen: HomeScreen },
  },
  
  {
    initialRouteName: '_Intro',
  }
);


const TempStack = TabNavigator(
  {
    _Login: { screen: Login },
    _Register: { screen: Register },
  },
  
  {
    initialRouteName: '_Login',
    animationEnabled: true,
    swipeEnabled: true,
  }
);


const MainStack = StackNavigator(
  {
    _first: { screen: RootStack },
    _second: { screen: TempStack },
  },
  
  {
    initialRouteName: '_first',
  }
);


export default MainStack;
