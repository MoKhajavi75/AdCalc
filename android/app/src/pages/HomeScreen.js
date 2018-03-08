import {
    StyleSheet,
    Button,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    KeyboardAvoidingView,
    } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';


class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../img/logo_top.png')}
          style={{ width: 100, height: 50, marginTop: 10, marginBottom: 10, alignItems: 'center' }}
        />
      );
    }
  }

  
export default class HomeScreen extends Component {
    static navigationOptions = {
      headerTitle: <LogoTitle />,
    };
  
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
        </View>
      );
    }
  }
