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

import Controllers from '../controller/controller.js';


export default class Login extends React.Component {
  constructor(){
    super();
    
    this.state = {
        email: "",
        password: "",
    }
  }


  static navigationOptions = {
    headerTransparent: true,
  };



  onLoginPressed() {
    // Validation
    if (validateEmail(this.state.email)
        && validateFilled(this.state.password)) {
          this.loginUser();
        }
  }

  loginUser() {
    let url = 'http://69778130.ngrok.io/'

    fetch(url + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson.message);

          if (responseJson.error == false) {
            this.props.navigation.navigate('_HomeScreen');
          }
        });
  }

  
  render() {
      return (
          <KeyboardAvoidingView style = {styles.container} behavior = 'padding'>

            <View
              style = {styles.loginPageTop}>
                <Image
                  source = {require('../img/logo_top.png')}
                    style = {styles.loginPageLogo}
                />
              
            </View>

            <View style = {styles.loginPageMiddle} >
              <TextInput
                style = {styles.input}
                placeholder = 'Email'
                underlineColorAndroid = 'transparent' 
                keyboardType = "email-address" 
                onChangeText =  {(text) => this.setState({email: text})}
              />
              <TextInput
                style = {styles.input}
                placeholder = "Password"
                secureTextEntry = {true}
                underlineColorAndroid = 'transparent' 
                onChangeText = {(text) => this.setState({password: text})}
              />
            </View>
            
            <KeyboardAvoidingView style = {styles.loginPageBottom} behavior = 'position'>
              <TouchableHighlight
                onLongPress = {() => this.props.navigation.navigate('_HomeScreen')}
                onPress = {this.onLoginPressed.bind(this)}
                style = {styles.button}
                underlayColor = '#1E90FF'>
                <Text style = {styles.buttonText}>
                  Login
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress = {() => this.props.navigation.navigate('_Register')}
                style = {styles.button}
                underlayColor = '#1E90FF'>
                <Text style = {styles.buttonText}>
                  Register
                </Text>
              </TouchableHighlight>
            </KeyboardAvoidingView>

          </KeyboardAvoidingView>
      )
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F0FFFF',
    },

    loginPageTop: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center'
    },

    loginPageLogo: {
      width: 150,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center'
    },
    
    loginPageMiddle: {
      flex: 5,
      justifyContent: 'center',
    },

    loginPageBottom: {
      flex: 3.5,
      justifyContent: 'center'
    },

    input: {
      alignSelf: 'stretch',
      height: 50,
      margin: 10,
      marginHorizontal: 15,
      padding: 3,
      textAlign: 'center',
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 25,
      borderColor: '#00BFFF',
    },

    button: {
      height: 50,
      margin: 5,
      marginHorizontal: 13,
      borderRadius: 25,
      alignSelf: 'stretch',
      justifyContent: 'center',
      backgroundColor: '#00BFFF',
    },

    buttonText: {
      fontSize: 22,
      color: '#FFFFFF',
      alignSelf: 'center'
    },
  

  });