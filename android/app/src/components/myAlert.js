import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import AwesomeAlert from 'react-native-awesome-alerts';


export default function myAlert (showAlert, title) {
  return <AwesomeAlert
              show = {showAlert}
              showProgress = {false}
              title = "AwesomeAlert"
              message = "I have a message for you!"
              closeOnTouchOutside = {false}
              closeOnHardwareBackPress = {false}
              showCancelButton = {true}
              showConfirmButton = {true}
              cancelText = "No, cancel"
              confirmText = "Yes, delete it"
              confirmButtonColor = "#DD6B55"

              onCancelPressed = {() => {
                this.hideAlert();
              }}
              onConfirmPressed = {() => {
                this.hideAlert();
              }}
            />

  }




const styles = EStyleSheet.create({
    errorText: {
      fontSize: 14,
      color: '#1DBC5C',
      alignSelf: 'center',
    }
  });