// AdCalc by MohamadKh75
// 2018-03-01
// ********************

import React, { Component } from 'react';
import { Text, View, AppRegistry } from 'react-native';

import styles from './src/styles.js';


export default class AdCalc extends Component {
  render() {
    return (
      <View style={styles.container}>

            <View style={styles.bala}>
              <Text style={styles.balaText}>Here is bala :|</Text>
            </View>

            <View style={styles.paiin}>
              <Text style={styles.paiinText}>Here is paiin :|:|</Text>
            </View>

        </View>

    );
  }
}
