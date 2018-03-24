import {
  View,
  Image,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  NetInfo,
  StatusBar,
} from 'react-native';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
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
  Text,
} from 'native-base';


export default class HomeScreen extends React.Component {
  // navigation Options
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

    // main render func
    render() {
      
      return (
        <Container>
          <Header
            style = {{ backgroundColor: '#F8F8FF'}}
            androidStatusBarColor="#2C3E50">

            <Left style={{ flex: 1 }}>
            </Left>

            <Body style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source = {require('../img/logo_top.png')}
                style = {styles.loginPageLogo}
              />
            </Body>

            <Right style={{ flex: 1 }}>
            </Right>
          </Header>

          <Content>

          </Content>
        </Container>
      );
    }
  }



// my lovely styles :D
const styles = EStyleSheet.create({
  loginPageLogo: {
    width: 150,
    height: 60,
    margin: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
