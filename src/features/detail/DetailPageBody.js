import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';
import {Bottom, Header} from '@components';
import NavigationService from '@navigation/service';
import {VOICE_RECORD, CAMERA} from '@navigation/screenName';
import {Icon} from 'react-native-elements';
import {dimensions, colorSet} from '@styles';

class DetailPageBody extends Component {
    state = {
        text: "hey"
    }

    navigateTo = (route) => {
        this.props.screenNavigate(route);
    }
    
    renderRightComponent = () => {
        const totalInvited = this.props.invited.length;
        const attendees = this.props.attendees.length;
        return (
            <View 
                style={{flexDirection: "row", alignItems: 'center', marginRight: 8}}
            >
                <Text style={{color:"#FFF"}}>{attendees}/{totalInvited}  </Text>
                <Text style={{color:"#FFF"}}>attendee{(attendees > 1) ? "s" : ""}  </Text>
                <Icon
                    name="child"
                    type="font-awesome"
                    size={20}
                    color="#FFF"
                />
            </View>
        )
    }

    renderDetailContent = () => {
        return (
            <React.Fragment>
                {this.renderTitle()}
                <View style={styles.line}/>
                {this.renderAgenda()}
                {this.renderPhotos()}
                {this.renderFiles()}
            </React.Fragment>
        )
    }

    renderTitle = () => {
        const {meetingName} = this.props;
        const {roomName} = this.props.roomInfo;
        return (
            <View style={styles.titleBox}>
                <Text style={styles.titleText}>
                    {meetingName}
                </Text>
                <Text style={styles.contentText}>
                    {roomName}
                </Text>
            </View>
        )
    }

    renderAgenda = () => {
        const {agendaPoints} = this.props;
        return (
            <View style={styles.contentBox}>
                <Text style={styles.titleText}>Agenda</Text>
                {agendaPoints.map((value, index) => {
                    return (
                        <View key={index} style={{alignItems: "center", flexDirection: "row"}}>
                            <View style={{height: 5, width: 5, borderRadius: 5, backgroundColor:"#FFF", marginRight: 8}}/>
                            <Text style={styles.contentText}>{value}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    renderPhotos = () => {
        return (
            <View style={styles.contentBox}>
                <Text style={styles.titleText}>Photos</Text>
            </View>
        )
    }

    renderFiles = () => {
        const {files} = this.props;
        return (
            <View style={styles.contentBox}>
                <Text style={styles.titleText}>Files</Text>
                {files.map((value, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                marginVertical: 4,
                            }}
                        >
                            <View style={{
                                flexDirection: "row",
                                alignItems: 'center'
                            }}>
                               <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 8,
                                    borderColor: colorSet.primary
                                }}
                               >
                                   <Icon
                                    name="news"
                                    color="#FFF"
                                    type="entypo"
                                    size={15}
                                   />
                                </View> 
                                <Text style={styles.filenameText}>{value.fileName}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    rightComponent={this.renderRightComponent()}
                />
                <ScrollView style={{flex:1}}>
                    {this.renderDetailContent()}
                </ScrollView>
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
    },
    titleText: {
        color: "#FFF",
        fontWeight: "500",
        letterSpacing: 1,
        marginBottom: 4
    },
    contentText: {
        color: "#FFF",
        letterSpacing: 1
    },
    titleBox: {
        width: dimensions.width * 2 / 3,
        margin: 12,
        marginLeft: 16,
    },
    contentBox: {
        margin: 12,
        marginLeft: 16,
        marginRight: 16
    },
    line: {
        width: dimensions.width,
        height: 1,
        backgroundColor: colorSet.primary
    },
    filenameText: {
        color: "#FFF",
        letterSpacing: 1,
        fontSize: 12
    }
})

const mapStateToProps = (state) => {
    return state.detail;
}
export default connect(mapStateToProps, {})(DetailPageBody);