import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
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

export default RootStack;