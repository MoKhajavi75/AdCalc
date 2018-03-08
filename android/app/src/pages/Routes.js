import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import Register from './Register.js';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
  
    Register: { screen: Register },
  },
  
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;