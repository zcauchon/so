import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {dimensions} from '@styles';
import BottomTab from './bottomTabs';

class Bottom extends Component {

    renderBottomContent = () => {
        const {banner, title} = this.props;
        if (banner) {
            return (
                <TouchableOpacity
                    onPress={() => this.props.onCancelPress()} 
                >
                    <View style={styles.container}>
                        <Icon
                            type="entypo"
                            name="arrow-left"
                            size={20}
                            color="#FFF"
                        />
                        <Text style={styles.text}>{title}</Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            const {onAddFilesPress, onRecordNotePress, onTakePhotoPress} = this.props;
            return (
                <BottomTab
                    onAddFilesPress={() => {
                        onAddFilesPress();
                    }}
                    onRecordNotePress={() => onRecordNotePress()}
                    onTakePhotoPress={() => onTakePhotoPress()}
                />
            )
        }
    }
    render() {
        const {title, banner} = this.props;
        return (
            <View
                style={
                    styles.buttonContainer
                }
            >
                {this.renderBottomContent()}
            </View>
        )
    }
}

Bottom.defaultProps = {
    title: "Cancel",
    banner: true
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