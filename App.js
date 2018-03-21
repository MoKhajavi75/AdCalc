// AdCalc by MohamadKh75
// 2018-03-01
// ********************

import React, { Component } from 'react';
import {Button,
        Text,
        View,
        Dimensions,
        Image,
        TextInput,
        TouchableHighlight,
        KeyboardAvoidingView,
        } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RootStack from './android/app/src/pages/Routes.js';
import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build({});


export default class AdCalc extends React.Component {
  render() {
    return <RootStack />;
  }
}
