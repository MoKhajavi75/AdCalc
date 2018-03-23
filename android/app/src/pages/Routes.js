import React, { Component } from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from './HomeScreen.js';
import Register from './Register.js';
import Login from './Login.js';


const RootStack = StackNavigator(
  {
    _Login: { screen: Login },
    _Register: { screen: Register },
    _HomeScreen: { screen: HomeScreen },
  },
  
  {
    initialRouteName: '_Login',
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


export default StackNavigator(
  {
    _first: { screen: TempStack },
    _second: { screen: RootStack },
  },
);