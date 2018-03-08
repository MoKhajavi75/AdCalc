import {Button,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    } from 'react-native';

import styles from './src/styles.js';


class Register extends Component {
    constructor(){
    
        this.state = {
            email: "",
            name: "",
            password: "",
            password_confirmation: ""
        }
    }

    render() {
        return (
            <View style={styles.loginPage}>
        <TextInput
            style = {styles.input}
            placeholder = 'Email'
            onChangeText =  {(val) => this.setState({email: val})}
        />

        <Text>
            {this.state.email}
        </Text>
    </View>
    )
    }
}


export default Register