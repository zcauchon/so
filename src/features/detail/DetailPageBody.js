import React, {Component} from 'react';
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
        const attendees = 2;
        const totalInvited = 8;
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
        const meetingName = "Design Meeting To Finalize Prototype";
        const roomName = "Room 3B Chestnut";
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
        const agendaPoints = [
            "Go over wireframes and user flow",
            "Discuss needed components",
            "Have Pizza",
            "Discuss next steps"
        ];
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
        const files = ["notes_for_donut_meeting.pdf", "notes_for_finalization_of_prototype.pdf"];
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
                                <Text style={styles.filenameText}>{value}</Text>
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
                <ScrollView style={{flex:1}}>
                    <Header
                        rightComponent={this.renderRightComponent()}
                    />
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
        marginLeft: 16
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

export default DetailPageBody;