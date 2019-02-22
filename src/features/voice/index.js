import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Bottom } from '../../components';
import VoiceComponent from './VoiceComponent';

class Voice extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <VoiceComponent/>
                </View>
                <Bottom
                    onCancelPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

export default Voice;