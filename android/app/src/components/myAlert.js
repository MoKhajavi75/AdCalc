import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import AwesomeAlert from 'react-native-awesome-alerts';


export default function myAlert({ showAlert, title, msg, onDismiss }) {
  return <AwesomeAlert
    show={showAlert}
    title={title}
    message={msg}
    closeOnTouchOutside={false}
    closeOnHardwareBackPress={false}
    showConfirmButton={true}
    confirmText="Dismiss"
    confirmButtonColor="#DD6B55"
    onCancelPressed={onDismiss}
    onConfirmPressed={onDismiss}
    onDismiss={onDismiss}
  />

}




const styles = EStyleSheet.create({
  errorText: {
    fontSize: 14,
    color: '#1DBC5C',
    alignSelf: 'center',
  }
});