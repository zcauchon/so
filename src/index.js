/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {YellowBox, DeviceEventEmitter} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Root from './store';
import AppNavigator from '@navigation';
import NavigationService from '@navigation/service';
import Auth from '@features/auth';

//bluetooth and beacons
import Permissions from 'react-native-permissions';
import Beacons from "react-native-beacons-manager";
YellowBox.ignoreWarnings(["Module RNIBeacon requires"]);
YellowBox.ignoreWarnings(["Remote debugger"]);

const AppContainer = createAppContainer(AppNavigator);

const uuid = "74278bda-b644-4520-8f0c-720eaf059935";
const identifier = "We The Best";

export default class App extends Component {
  // componentDidMount() {
  //   const region = {
  //     identifier,
  //     uuid
  //   };
  //   Beacons.startRangingBeaconsInRegion(region);
  //   this.beaconsDidRange = DeviceEventEmitter.addListener(
  //     "beaconsDidRange",
  //     data => {console.log(data.beacons)}
  //   )
  // }

  render() {
    return (
      <Root>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Root>
    );
  }
}