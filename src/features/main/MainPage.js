import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Card} from '@components';
import {meetingsData} from '../../actions/meetingsData';
import moment from 'moment';

import {DETAIL} from '@navigation/screenName';

//To navigate to Detail

const numColumns = 2;
const currentDate = new Date();
const today = currentDate;
const date = moment(today).format("MMMM D YYYY");
const date2 = moment(today).format("l");
const tomorrow = moment(today).add(1, 'days').format("MMMM D YYYY");

class MainPage extends Component {
    state = {
        data: meetingsData,
    }
    
    navigateTo = (route) => {
        this.props.navigateTo(route);
    }
    
    renderCardToday = ({item}) => {
        if(item.meetingTime.date === date2){
            return(
                <TouchableOpacity
                    onPress={()=>this.navigateTo(DETAIL)} 
                >
                    <Card
                        name={item.meetingName}
                        meetingTime={item.meetingTime.startTime}
                        hashtag='#UCMS'
                        // This is where the beacon will be checked!
                        checkin
                    />
                </TouchableOpacity>
            )
        }
    }
    renderCardFuture = ({item}) => {
        if(item.meetingTime.date !== date2){
            return(
                <TouchableOpacity
                    onPress={()=>this.navigateTo(DETAIL)} 
                >
                    <Card
                        name={item.meetingName}
                        meetingTime={item.meetingTime.startTime}
                        hashtag='#UCMS'
                        // This is where the beacon will be checked!
                        checkout
                    />
                </TouchableOpacity>
            )
        }
    }
    
    render() {
        return (
            <View>
                <View style={{alignItems:'flex-end', paddingRight: 20, paddingBottom:30}}>
                    <Text style={styles.yourlocation}>You're in Deloitte 200</Text>
                </View>
                <View style={{paddingLeft:15}}>
                    <Text style={styles.yourmeeting}>Your meetings</Text>
                    <Text style={styles.todays}>Today, {date}</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    contentContainerStyle={styles.listView}
                    renderItem={this.renderCardToday}
                    numColumns={numColumns}
                />
                <View style={{paddingLeft:15}}>
                    <Text style={styles.todays}>Tomorrow, {tomorrow}</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    contentContainerStyle={styles.listView}
                    renderItem={this.renderCardFuture}
                    numColumns={numColumns}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    listView:{
        justifyContent:'space-around',
        paddingLeft:7
    },
    yourlocation:{
        fontWeight: '300',
        lineHeight: 18,
        fontSize: 14,
        color: 'white',
    },
    yourmeeting:{
        fontWeight: '600',
        lineHeight: 27,
        fontSize: 16,
        color: 'white',
        paddingBottom:10
    },
    todays:{
        fontWeight: '400',
        lineHeight: 23,
        fontSize: 13,
        color: 'white',
        paddingBottom:10
    },
    tomorrow:{
        fontWeight: '400',
        lineHeight: 23,
        fontSize: 13,
        color: 'white',
        paddingBottom:10
    }
});

export default MainPage;