import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Auth from '@features/auth';
import Main from './navigators/main';

export default createStackNavigator(
  {
    Auth,
    Main
  },
  {
    initialRouteName: "Main",
    headerMode: "none",
    cardStyle: {
      backgroundColor: "#111211"
    }
  }
)