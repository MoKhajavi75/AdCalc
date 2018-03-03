// AdCalc by MohamadKh75
// 2018-03-01
// ********************

import React, { Component } from 'react';
import { Button, Text, View, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation'

import styles from './src/styles.js';


export default class AdCalc extends React.Component {
  render() {
    return <RootStack />;
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#F0FFFF',

    headerStyle: {
      backgroundColor: '#f4511e',
    },

    headerTitleStyle: {
      fontWeight: 'bold',
      marginStart: (Dimensions.get('window').width) / 2.4,
    },
  };

  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };
  
  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
        title="Update the title"
        onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
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

  },

  {
    initialRouteName: 'Home',
  }
);
