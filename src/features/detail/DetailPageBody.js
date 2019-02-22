import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Bottom} from '@components';
import NavigationService from '@navigation/service';
import {VOICE_RECORD, CAMERA} from '@navigation/screenName';

class DetailPageBody extends Component {
    state = {
        text: "hey"
    }

    navigateTo = (route) => {
        this.props.screenNavigate(route);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}><Text style={{color:"#FFF"}}>{this.state.text}</Text></View>
                <Bottom banner={false}
                   onAddFilesPress={()=>this.navigateTo(CAMERA)} 
                   onRecordNotePress={()=>{
                       this.navigateTo(VOICE_RECORD)
                    }}
                   onTakePhotoPress={()=>this.navigateTo(CAMERA)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default DetailPageBody;