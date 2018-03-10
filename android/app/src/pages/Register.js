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


export default class Register extends React.Component {
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


  static navigationOptions = ({ navigation }) => {};

  onRegisterPressed() {
    let email = this.state.email;
    let fname = this.state.fname;
    let lname = this.state.lname;
    let password = this.state.password;

    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        email: "",
        fname: "",
        lname: "",
        password: "",
      }),
    });

    alert(email);
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
              <TouchableHighlight
                onPress = {this.onRegisterPressed.bind(this)}
                style = {styles.button}
                underlayColor = '#1E90FF'>
                <Text style={styles.buttonText}>
                  Register!
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
      marginHorizontal: 13,
      borderRadius: 25,
      alignSelf: 'stretch',
      justifyContent: 'center',
      backgroundColor: '#00BFFF',
    },

    buttonText: {
      fontSize: 22,
      color: '#FFF',
      alignSelf: 'center'
    },

});