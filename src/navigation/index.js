import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";

import Auth from '@features/auth';
import Main from './navigators/main';
import CameraPage from '@features/camera';
import DetailPage from '@features/detail';
import Voice from '@features/voice';

//@Zach Change initialRouteName's argument of Auth to Camera to 
// show your page
export default createStackNavigator(
  {
    Auth,
    Main,
    Voice,
    Camera: CameraPage,
    Detail: DetailPage
  },
  {
    initialRouteName: "Detail",
    headerMode: "none",
    cardStyle: {
      backgroundColor: "#111211"
    }
  }
)