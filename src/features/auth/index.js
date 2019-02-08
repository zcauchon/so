import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Button from '@components/button'

class Auth extends Component {
  state = {
    call: ""
  }
  render() {
    return (
      <View style={styles.authContainer}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Text>
            SMART OFFICE
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>{this.state.call}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Button confirm onButtonPress={() => this.setState({call: "hey"})}>
              LOGIN
          </Button>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Auth;
