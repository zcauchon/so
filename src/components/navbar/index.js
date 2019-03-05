
/**
 *
 * Referenced from React Native Elements Header.js,
 * @modified by Keith Wei Luen Lim
 *
 **/

import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";

import { getStatusBarHeight } from "@config";
import { colors, dimensions } from "@styles/base";
// import isEmpty from "lodash.isempty";
import { Icon } from "react-native-elements";

export default class YuanHeader extends Component {
  alignStyle(placement) {
    switch (placement) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  }

  generateChild(value, type, placement, centerComponentStyle) {
    if (React.isValidElement(value)) {
      return <View key={type}>{value}</View>;
    } else if (typeof value === "object" 
    // && !isEmpty(value)
    ) {
      return type === "center" ? (
        <View
          key={type}
          style={[
            styles.centerComponent,
            centerComponentStyle,
            {
              alignItems: this.alignStyle(placement)
            }
          ]}
        >
          <Text>{value}</Text>
        </View>
      ) : (
        <Text key={type}>{value}</Text>
      );
    }

    return type === "center" ? null : <View key={type} />;
  }

  populateChildren(propChildren, placement, centerComponentStyle) {
    const childrenArray = [];

    const leftComponent = this.generateChild(
      propChildren.leftComponent,
      "left"
    );
    const centerComponent = this.generateChild(
      propChildren.centerComponent,
      "center",
      placement,
      centerComponentStyle
    );
    const rightComponent = this.generateChild(
      propChildren.rightComponent,
      "right"
    );

    childrenArray.push(leftComponent, centerComponent, rightComponent);

    return childrenArray;
  }

  render() {
    const {
      children,
      statusBarProps,
      leftComponent,
      centerComponent,
      centerComponentStyle,
      rightComponent,
      backgroundColor,
      outerContainerStyles,
      innerContainerStyles,
      placement,
      cancel,
      transparent,
      ...attributes
    } = this.props;

    let propChildren = [];

    if (leftComponent || centerComponent || rightComponent) {
      propChildren = this.populateChildren(
        {
          leftComponent,
          centerComponent,
          rightComponent
        },
        placement,
        centerComponentStyle
      );
    }

    if (transparent) {
      return (
        <View
          {...attributes}
          style={[
            styles.outerContainer,
            backgroundColor && { backgroundColor },
            outerContainerStyles
          ]}
        >
          <View style={[styles.innerContainer, innerContainerStyles]}>
            {propChildren.length > 0 ? propChildren : children}
          </View>
        </View>
      );
    } else {
      return (
        <View
          {...attributes}
          style={[
            styles.outerContainer,
            styles.regular,
            backgroundColor && { backgroundColor },
            outerContainerStyles
          ]}
        >
          <View style={[styles.innerContainer, innerContainerStyles]}>
            {propChildren.length > 0 ? propChildren : children}
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    zIndex: 10,
    paddingHorizontal: 16,
    height: Platform.OS === "ios" ? 80 : 80 - getStatusBarHeight,
    ...Platform.select({
      ios: {
        paddingTop: getStatusBarHeight()
      }
    }),
    shadowColor: colors.dark,
    shadowOffset: { height: 1 },
    shadowOpacity: 0.4
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  centerComponent: {
    flex: 1,
    marginHorizontal: Platform.OS === "ios" ? 15 : 16
  },
  regular: {
    backgroundColor: "#111211"
  }
});