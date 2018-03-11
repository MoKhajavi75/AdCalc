import React, { Component } from 'react';


validateEmail = (email) => {
  if (email == "") {
    alert("Please enter your Email address!")
    return false;
  }

  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (regex.test(email)) {
    return true;
  }
  else {
    alert("The Email address is invalid!")
    return false;
  }
};


validateName = (name, isFirstName) => {
  if (name == "") {
    if (isFirstName) {
      alert("Please enter your First Name!")
    }
    else {
      alert("Please enter your Last Name!")
    }
    
    return false;
  }
  
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

    return false;
  }
}


validatePassword = (pass) => {   
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
    if (regex.test(pass)) {
      return true;
    }
    else {
      alert("The Password must be:\n8 alphanumeric characters\nincluding one uppercase letter\nincluding one special character")
      return false;
    }
}


validateConfirm = (pass, passConf) => {  
  if (pass == passConf) {
    return true;
  }
  else {
    alert("The Password does not match the confirm password!")
    return false;
  }
}


validateFilled = (txt) => {   
  if (txt != "") {
    return true;
  }
  else {
    alert("Please enter your Password!")
    return false;
  }
}


export default validateEmail;