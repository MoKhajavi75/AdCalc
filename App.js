// AdCalc by MohamadKh75
// 2018-03-01
// ********************

import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import styles from './src/styles.js';


export default class AdCalc extends React.Component {
  render() {
    return <RootStack />;
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <Button
            title = "Go to Details"
            onPress = {() => this.props.navigation.navigate('Details')}
          />
          <Button
            title = "Go to My Page 😁"
            color = "#6495ED"
            onPress = {() => this.props.navigation.navigate('My')}
          />
          <Button
            title = "Back!"
            color = "gray"
            onPress = {() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF8DC' }}>
        <Text>Details Screen</Text>
          <Button
            title = "Go to Home"
            onPress = {() => this.props.navigation.navigate('Home')}
          />
          <Button
            title = "Go to Mine 😁"
            color = "#6495ED"
            onPress = {() => this.props.navigation.navigate('My')}
          />
          <Button
            title = "Back!"
            color = "gray"
            onPress = {() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}


class MyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0FFFF'}}>
        <Text>My Beautiful Screen 😁</Text>
          <Button
            title = "Go to Home!"
            onPress = {() => this.props.navigation.navigate('Home')}
          />
          <Button
            title = "Go to Details"
            color = "#6495ED"
            onPress = {() => this.props.navigation.navigate('Details')}
          />
          <Button
            title = "Back!"
            color = "gray"
            onPress = {() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },

    Details: {
      screen: DetailsScreen,
    },

    My: {
      screen: MyScreen,
    },
  },

  {
    initialRouteName: 'Home',
  }
);
