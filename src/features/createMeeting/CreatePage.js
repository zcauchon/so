import React, {Component} from 'react';
import {View, Text} from 'react-native';

class CreatePage extends Component {
  state = {

  }

  navigateTo = (route) => {
    this.props.navigateTo(route);
  }
  
  render() {
        return (
          <View>
              <Text style={{color: "#FFF"}}>Create Meeting</Text>
          </View>
        )
    }
}

export default CreatePage;