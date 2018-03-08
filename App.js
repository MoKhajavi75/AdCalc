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
import { StackNavigator } from 'react-navigation'

import styles from './src/styles.js';


export default class AdCalc extends React.Component {
  constructor(){
    super();
    
    this.state = {
        email: "",
        fname: "",
        lname: "",
        password: "",
        password_confirmation: "",
    }
}

onRegisterPressed() {
      
}

render() {
    return (
        <KeyboardAvoidingView style = {styles.container} behavior = 'padding'>

          <View
          style = {styles.loginPageTop}
          >
            <Image
              source = {require('./src/img/logo_top.png')}
              style = {styles.loginPageLogo}
            />
          </View>

          <View style = {styles.loginPageMiddle} >
            <TextInput
              style = {styles.input}
              placeholder = 'Email'
              underlineColorAndroid = 'transparent' 
              onChangeText =  {(text) => this.setState({email: text})}
            />
            <TextInput
              style = {styles.input}
              placeholder = "First Name"
              underlineColorAndroid = 'transparent' 
              onChangeText = {(text) => this.setState({fname: text})}
            />
            <TextInput
              style = {styles.input}
              placeholder = "Last Name"
              underlineColorAndroid = 'transparent' 
              onChangeText = {(text) => this.setState({lname: text})}
            />
            <TextInput
              style = {styles.input}
              placeholder = "Password"
              secureTextEntry = {true}
              underlineColorAndroid = 'transparent' 
              onChangeText = {(text) => this.setState({password: text})}
            />
            <TextInput
              style = {styles.input}
              placeholder = "Password Confirmation"
              underlineColorAndroid = 'transparent' 
              secureTextEntry = {true}
              onChangeText = {(text) => this.setState({password_confirmation: text})}
            />
          </View>
          
          <KeyboardAvoidingView style = {styles.loginPageBottom} behavior = 'position'>
            <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>
                Register!
              </Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>

        </KeyboardAvoidingView>
)
}
}

/*
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./src/img/logo_top.png')}
        style={{ width: 100, height: 50, marginTop: 10, marginBottom: 10, alignItems: 'center' }}
      />
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
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
    // 2. Read the params from the navigation state
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
*/