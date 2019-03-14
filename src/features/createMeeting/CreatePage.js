import React, {Component} from 'react';
import {connect} from 'react-redux';
import { colors, dimensions } from "@styles/base";
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Button, Input} from '@components';

import {MAIN_S} from '@navigation/screenName';

class CreatePage extends Component {
  state = {
    email: ""
  }

  navigateTo = (route) => {
    this.props.navigateTo(route);
  }
  
  emailChangedHandler = val => {
    this.setState({
      email: val
    })
  }

  addCardHandler = () => {
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{color: 'white', padding:40}}>Create Meeting</Text>
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Input 
            title="Email"
            onChangeText={this.emailChangedHandler}
          />
          <Input 
            title="Password"
          />
          <Input 
            title="Start time"
          />
          <Input 
            title="End time"
          />
          <Input 
            title="Project"
          />
          <Input 
            title="Room"
          />
        </View>
        <View style={style.addContainer}>
          <TouchableOpacity
            onPress={()=>this.navigateTo(MAIN_S)}
            // onPress={this.addCardHandler}
          >  
            <View style={style.addView}>
              <Text style={style.addText}>
                Add
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const style=StyleSheet.create({
  addContainer:{
    width: Dimensions.get('window').width *2/10,
    marginLeft:250,
    paddingTop:10
  },
  addView:{
    backgroundColor:'#7EB72E',
    alignItems:'flex-end',
    paddingTop:10, 
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20, 
    borderRadius:20,
  },
  addText:{
    color:'white',
    fontSize:18
  }
});

// const mapStateToProps = (state) => {
//   return state.createMeeting;
// }
// export default connect(mapStateToProps, {})(CreatePage);
export default CreatePage;