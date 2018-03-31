import {
  View,
  Image,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  NetInfo,
  StatusBar
} from "react-native";
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import EStyleSheet from "react-native-extended-stylesheet";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

import Controllers from "../controller/controller.js";
import myAlert from "../components/myAlert.js";

export default class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      fname: "",
      lname: "",
      password: "",
      password_confirmation: "",
      _title: "",
      msg: ""
    };
  }

  // navigation Options
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  // Check internet connectivity
  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "change",
      this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(isConnected => {
      this.setState({ isConnected });
    });
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "change",
      this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = isConnected => {
    this.setState({
      isConnected
    });
  };

  // show customized alert
  showAlert = (__title, __msg) => {
    this.setState({
      ...this.state,
      showAlert: true,
      _title: __title,
      msg: __msg
    });
  };

  // What happens after you press register button
  onRegisterPressed() {
    // Validation
    if (this.state.isConnected) {
      if (
        validateEmail(this.state.email) &&
        validateName(this.state.fname, true) &&
        validateName(this.state.lname, false) &&
        validateFilled(this.state.password) &&
        validatePassword(this.state.password) &&
        validateConfirm(this.state.password, this.state.password_confirmation)
      ) {
        this.registerUser();
      }
    } else {
      this.showAlert("ERROR", "Connect to internet please!");
    }
  }

  // connect to server and etc.
  registerUser() {
    let url = "http://69778130.ngrok.io/";

    fetch(url + "register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email: this.state.email,
        firstname: this.state.fname,
        lastname: this.state.lname,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson.message);

        if (responseJson.error == false) {
          this.props.navigation.navigate("_HomeScreen");
        }
      });
  }

  // render my customized alert
  renderMyAlert = (showAlert, _title, msg) =>
    myAlert({
      showAlert,
      _title,
      msg,
      onDismiss: () => this.setState({ ...this.state, showAlert: false })
    });

  // main render func
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor="#2C3E50" />
        <View style={styles.loginPageTop}>
          <Image
            source={require("../img/logo_top.png")}
            style={styles.loginPageLogo}
          />
        </View>

        <KeyboardAwareScrollView
          style={{ backgroundColor: "#F0FFFF" }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ justifyContent: "center" }}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            underlineColorAndroid="transparent"
            keyboardType="email-address"
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ fname: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ lname: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ password: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password Confirmation"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={text =>
              this.setState({ password_confirmation: text })
            }
          />
        </KeyboardAwareScrollView>

        <View style={{ flex: 3.5, justifyContent: "center" }} />

        <Footer>
          <FooterTab>
            <Button
              full
              style={{ backgroundColor: "#2C3E50" }}
              onPress={() => this.props.navigation.navigate("_Login")}
            >
              <Text style={{ color: "#87CEEB" }}>Login</Text>
            </Button>
            <Button
              full
              style={{ backgroundColor: "#2C3E60" }}
              onPress={this.onRegisterPressed.bind(this)}
            >
              <Text style={{ color: "#87CEEB" }}>Register</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

// my lovely styles :D
const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F0FFFF"
  },

  loginPageTop: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },

  loginPageLogo: {
    width: 150,
    height: 60,
    margin: 15,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    alignSelf: "stretch",
    height: 50,
    margin: 10,
    marginHorizontal: 15,
    padding: 3,
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#00BFFF"
  }
});
