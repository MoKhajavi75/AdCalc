import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import AwesomeAlert from "react-native-awesome-alerts";

export default function myAlert({ showAlert, _title, msg, onDismiss }) {
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      title={_title}
      message={msg}
      showConfirmButton={true}
      confirmButtonColor="#1E90FFB0"
      onConfirmPressed={onDismiss}
      confirmText="Okay!"
      showCancelButton={true}
      cancelButtonColor="#DD6B55"
      onCancelPressed={onDismiss}
      cancelText="Cancel"
      onDismiss={onDismiss}
    />
  );
}
