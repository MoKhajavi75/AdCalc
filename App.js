// AdCalc by MohamadKh75
// 2018-03-01
// ********************

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import RootStack from './android/app/src/pages/Routes.js';
import EStyleSheet from 'react-native-extended-stylesheet';
import { YellowBox } from 'react-native';



YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'NetInfo\'s "change" event is deprecated',
]);


EStyleSheet.build({});


export default class AdCalc extends React.Component {
  render() {
    return <RootStack />;
  }
}
