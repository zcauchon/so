import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import TabBar from '@navigation/components/TabBar';

import Colors from '@styles/colors';

import Main from '@features/main';
import Calendar from '@features/calendar';
import Voice from '@features/voice';
import { colors } from 'react-native-elements';
import {Icon} from 'react-native-elements';

const renderTabBarIcon = (iconName, focused) => {
    return (
        <View
            style={
                [
                    styles.tabIconStyle,
                    focused && styles.tabIconFocusStyle
                ]
            }
        >
            <Icon
                size={24}
                name= {iconName}
                color="#FFF"
                type="entypo"
            />
        </View>
    )
}

const HomeStack = createStackNavigator({
    Main
},
{
    headerMode: "none",
    cardStyle: {
        backgroundColor: "#111211"
    }
})

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => renderTabBarIcon("home", focused)
};

const CalendarStack = createStackNavigator({
    Calendar
},
{
    headerMode: "none",
    cardStyle: {
        backgroundColor: "#111211"
    }
})

CalendarStack.navigationOptions = {
    tabBarLabel: 'Calendar',
    tabBarIcon: ({focused}) => renderTabBarIcon("calendar", focused)
}

const VoiceAIStack = createStackNavigator({
    Voice
},
{
    headerMode: "none",
    cardStyle: {
        backgroundColor: "#111211"
    }
})

VoiceAIStack.navigationOptions = {
    headerMode: "none",
    tabBarLabel: 'Voice',
    tabBarIcon: ({focused}) => renderTabBarIcon("mic", focused)
}

export default createBottomTabNavigator({
    HomeStack,
    VoiceAIStack,
    CalendarStack,
},
{
    tabBarOptions: {
        activeTintColor: Colors.primary,
        showLabel: false,
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#1F211D'
        }
    },
})

const styles = StyleSheet.create({
    tabIconStyle: {
        backgroundColor: "transparent",
        height: 40,
        width: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    },
    tabIconFocusStyle: {
        backgroundColor: "#7EB72E"
    }
})