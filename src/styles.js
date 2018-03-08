import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0FFFF',
    },

    loginPageTop: {
      flex: 2,
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
      flex: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },

    loginPageBottom: {
      flex: 4,
      alignItems: 'center',
      justifyContent: 'center'
    },

    input: {
      width: 120,
      height: 50,
      margin: 10,
      padding: 3,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48bbec'
    },

  });

export default styles;