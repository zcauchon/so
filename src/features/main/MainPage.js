import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {DETAIL} from '@navigation/screenName';

//To navigate to Detail
class MainPage extends Component {

    navigateTo = (route) => {
        this.props.navigateTo(route);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity
                    onPress={()=>this.navigateTo(DETAIL)} 
                >
                    <Text style={{color:"#FFF"}}>Main</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default MainPage;