import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Bottom} from '@components';
import DetailPageBody from './DetailPageBody';

class DetailPage extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <DetailPageBody 
                    screenNavigate={(route) => this.props.navigation.navigate(route)}
                />
                <Bottom title="Back to meetings"/>
            </View>
        )
    }
}

export default DetailPage;