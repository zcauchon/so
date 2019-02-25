import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Dimensions} from 'react-native';

class Button extends Component {
  render() {
    const {children, confirm, warning, onButtonPress} = this.props;
    return (
      <View>
        <TouchableOpacity onPress={onButtonPress}>
          <View style={[
            styles.container,
            confirm && styles.confirm,
            warning &&  styles.warning,
          ]}>
          <Text style={styles.text}>
            {children}
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

Button.defaultProps = {
  children: "login"
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: Dimensions.get('window').width *2/3,
      borderRadius: 10
  },
  text: {
      color: '#FFF',
      fontWeight: '600',
      fontSize: 16,
      letterSpacing: 4
  },
  confirm : {
    backgroundColor: '#7EB72E'
  },
  warning: {
    backgroundColor: '#ed6a58'
  }
})

export default Button;
