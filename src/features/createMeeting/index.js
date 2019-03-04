import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from '@components';
import CreatePage from './CreatePage';

class CreateMapping extends Component {
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
                <CreatePage 
                    screenNavigate={(route) => this.props.navigation.navigate(route)}
                />
            </View>
        )
    }
}

export default CreatePage;