import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Swiper from 'react-native-swiper';
import { TabNavigator } from 'react-navigation';

EStyleSheet.build({});

export default class Intro extends Component {
  // navigation Options
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

  // main render func
  render(){
    return (
      <Swiper
        style = {styles.wrapper}
        showsButtons = {false}
        loop = {false}
        dotColor = "#F0FFFF"
        activeDotColor = "#2C3E50"
      >
        <View style={styles.slide1}>
          <StatusBar backgroundColor = '#2C3E50'/>
          <Text style={styles.text}>Hello 😊</Text>
        </View>
        <View style={styles.slide2}>
          <StatusBar backgroundColor = '#2C3E50'/>
          <Text style={styles.text}>This is Probably{"\n"}
          The Most Advanced Calculator{"\n"}
          in the World! 😁
          </Text>
        </View>
        <View style={styles.slide3}>
          <StatusBar backgroundColor = '#2C3E50'/>
          <View style={{ flex: 6, justifyContent: 'center'}}>
            <Text style={styles.text}>Let's Get Started 👇🏻</Text>
          </View>

          <View style={{ flex: 10}}>
            <TouchableOpacity
              activeOpacity = {0.5}
              onPress = {() => this.props.navigation.navigate('_Login')}>
                <Image
                  source = {require('../img/AdCalc.png')}
                  style = {styles.logo} />
            </TouchableOpacity>
          </View>
          
        </View>

      </Swiper>
    );
  }
}



// my lovely styles :D
const styles = EStyleSheet.create({
    wrapper: {
    },
    
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
  
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
  
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    logo: {
      width: '17rem',
      height: '17rem',
    },
  })