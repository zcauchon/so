import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Bottom} from '@components';
import CameraComponent from './CameraComponent';

//@TODO Zach
// Camera Page

class CameraPage extends Component {
    render() {
        return (
            <View style={styles.cameraContainer}>
                <View style={{flex: 1}}>
                    <CameraComponent/>
                </View>
                <Bottom
                    onCancelPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
    },
})

export default CameraPage;