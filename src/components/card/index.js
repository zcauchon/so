import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Card extends Component {
  render () {
    const {checkin, checkout} = this.props;
    
    return (
      <View style={[styles.cardContainer, 
        checkin && checkinstyles.cardContainerCheckIn,
        checkout && checkoutstyles.cardContainerCheckOut,
      ]}>
        <Text style={[styles.textCard,
          checkin && checkinstyles.textCard,
          checkout && checkoutstyles.textCard
        ]}>
          {this.props.name}
          {/* Meeting to discuss component structure */}
        </Text>
        
        <View style={{flex: 1,justifyContent: 'flex-end'}}>
        <View style={styles.hashtag}>
          <Text style={styles.textHastag}> 
            {this.props.hashtag}
            {/* #UCMS */}
          </Text>
        </View>
          <View style={[styles.divider,
            checkin && checkinstyles.divider,
            checkout && checkoutstyles.divider
          ]}/>
          <Text style={[styles.textTime,
            checkin && checkinstyles.textTime,
            checkout && checkoutstyles.textTime
          ]}>
            {this.props.meetingTime}
            {/* 11:00 AM */}
          </Text>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    padding:10,
    margin:5,
    height:150,
    width:170,
    borderWidth: 3,
    borderColor: '#7EB72E',
    borderRadius: 15
  },
  textCard: {
    fontSize:16,
  },
  hashtag: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height:20,
    width:50,
    marginTop:5
  },
  textHastag: {
    fontSize:12,
  },
  divider: {
    borderBottomWidth: 1,
    padding:7
  },
  textTime:{
    fontSize:15,
    paddingTop:10
  },
});

const checkinstyles = StyleSheet.create({
  cardContainerCheckIn:{
    backgroundColor: '#7EB72E',
  },
  textCard: {
    color: 'black'
  },
  textTime:{
    color: 'black'
  },
  divider: {
    borderBottomColor: 'black',
  },
});
const checkoutstyles = StyleSheet.create({
  cardContainerCheckOut:{
    backgroundColor: 'transparent',
  },
  textCard: {
    color: 'white'
  },
  textTime:{
    color: 'white'
  },
  divider: {
    borderBottomColor: 'white',
  },
});

export default Card;