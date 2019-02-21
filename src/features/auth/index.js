import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Button, Input} from '@components';

import NavigationService from '@navigation/service';
import {MAIN_S} from '@navigation/screenName';

class Auth extends Component {
  state = {
    call: ""
  }

  onLoginPress = () => {
    NavigationService.replace(MAIN_S);
  }

  render() {
    return (
      <View style={styles.authContainer}>
        <View style={{
          flex: 1, 
          justifyContent: 'flex-end'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.whiteText}>
              SMART 
            </Text>
            <View style={styles.greenBall}/>
            <Text style={styles.whiteText}>
              FFICE
            </Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput/>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Input 
            label="Password"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Button 
            confirm 
            onButtonPress={this.onLoginPress}
          >
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
    alignItems: 'center',
  },
  whiteText:{
    color: '#FFF',
    fontSize: 25,
    letterSpacing: 2,
    fontWeight: '500'
  },
  greenBall: {
    height: 20,
    width: 20,
    borderRadius: 20,
    marginLeft: 8,
    marginRight: 2,
    backgroundColor: "#7EB72E"
  }
})

export default Auth;
