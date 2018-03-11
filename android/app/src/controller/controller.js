import React, { Component } from 'react';


validateEmail = (email) => {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (regex.test(email)) {
    return true;
  }

  else {
    alert("The Email address is invalid!")
  }
};


validateName = (name, isFirstName) => {
  var regex = /^[a-zA-Z ]{2,30}$/;
  
  if (regex.test(name)) {
    return true;
  }

  else {
    if (isFirstName) {
      alert("The First Name is invalid!")
    }

    else {
      alert("The Last Name is invalid!")
    }
  }
}


validatePassword = (pass) => {
  var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
  if (regex.test(pass)) {
    return true;
  }

  else {
    alert("The Password must be:\n8 alphanumeric characters\nincluding one uppercase letter\nincluding one special character")
  }
}


validateConfirm = (pass, passConf) => {  
  if (pass == passConf) {
    return true;
  }

  else {
    alert("The Password does not match the confirm password!")
  }
}

export default validateEmail;