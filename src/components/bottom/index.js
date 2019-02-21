import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {dimensions} from '@styles';

class Bottom extends Component {
    render() {
        return (
            <TouchableOpacity
                style={
                    styles.buttonContainer
                }
            >
                <View style={styles.container}>
                    <Icon
                        type="entypo"
                        name="arrow-left"
                        size={20}
                        color="#FFF"
                    />
                    <Text style={styles.text}>Cancel</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'flex-end',
        paddingTop: 8,
        paddingBottom: 20,
    },
    container: {
        height: 50,
        width: dimensions.width,
        justifyContent: "flex-start",
        paddingHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: "#FFF", 
        fontSize: 13, 
        marginLeft: 8 
    }
})

export default Bottom;