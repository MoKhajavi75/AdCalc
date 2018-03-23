import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import AwesomeAlert from 'react-native-awesome-alerts';



export default function myAlert({ showAlert, _title, _msg, onDismiss }) {
  return <AwesomeAlert
    show = {showAlert}
    showProgress = {false}

    closeOnTouchOutside = {false}
    closeOnHardwareBackPress = {false}

    title = {_title}
    message = {_msg}
    
    showConfirmButton = {true}
    confirmButtonColor = "#DD6B55"
    onConfirmPressed = {onDismiss}
    confirmText = "Okay!"
    
    showCancelButton = {true}
    onCancelPressed = {onDismiss}
    cancelText = "Cancel"
    
    onDismiss = {onDismiss}
  />
}



const styles = EStyleSheet.create({
  errorText: {
    fontSize: 14,
    color: '#1DBC5C',
    alignSelf: 'center',
  }
});