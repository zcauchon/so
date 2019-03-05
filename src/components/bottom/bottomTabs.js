import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

class BottomTab extends Component {
    renderContent = () => {
        const {content} = this.props;

        if (content) {
            return (
                <View style={styles.container}>
                    {content}
                </View>
            )
        } else {
            const {onAddFilesPress, onRecordNotePress, onTakePhotoPress} = this.props;
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            onAddFilesPress();}} 
                    >
                        <View style={styles.iconContainer}>
                            <Icon
                                type="entypo"
                                color="#FFF"
                                name="archive"
                            />
                            <Text style={styles.iconText}>add files</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            onRecordNotePress();
                        }} 
                    >
                        <View style={styles.iconContainer}>
                            <Icon
                                type="entypo"
                                color="#FFF"
                                name="mic"
                            />
                            <Text style={styles.iconText}>record note</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => onTakePhotoPress()}
                    >
                        <View style={styles.iconContainer}>
                            <Icon
                                type="entypo"
                                color="#FFF"
                                name="camera"
                            />
                            <Text style={styles.iconText}>take a photo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render() {
        return (
            <View>
                {this.renderContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconText: {
        color: "#FFF",
        fontSize: 11,
        marginTop: 4
    }
})

export default BottomTab;