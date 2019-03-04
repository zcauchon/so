import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '@components';
import MainPage from './MainPage';

class Main extends Component {
  renderCenterComponent = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.whiteText}>
          SMART 
        </Text>
        <View style={styles.greenBall}/>
        <Text style={styles.whiteText}>
          FFICE
        </Text>
      </View>
    )
  }
  render() {
    return (
      <View style={{flex:1}}>
          <Header
              centerComponent={this.renderCenterComponent()}
          >
          </Header>
          <MainPage
            navigateTo={(route)=>this.props.navigation.navigate(route)}
          />
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
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '500'
  },
  greenBall: {
    height: 15,
    width: 15,
    borderRadius: 15,
    marginLeft: 8,
    marginRight: 2,
    backgroundColor: "#7EB72E"
  }
})

export default Main;