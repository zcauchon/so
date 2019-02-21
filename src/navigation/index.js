import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Auth from '@features/auth';
import Main from './navigators/main';
import CameraPage from '@features/camera';

//@Zach Change initialRouteName's argument of Auth to Camera to 
// show your page
export default createStackNavigator(
  {
    Auth,
    Main,
    Camera: CameraPage
  },
  {
    initialRouteName: "Auth",
    headerMode: "none",
    cardStyle: {
      backgroundColor: "#111211"
    }
  }
)