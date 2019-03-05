import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class Input extends Component {
    render() {
        const {label} = this.props;
        return (
            <View>
                <Text>{label}</Text>
                <TextInput placeholder={label}/>
            </View>
        )
    }
}
//this is a test
export default Input;