/**
 * @author Keith Wei Luen Lim
 *
 **/

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, TextInput } from "react-native";
import { colors, dimensions } from "@styles/base";
import {colorSet} from '@styles';
import * as Animatable from "react-native-animatable";
import { ViewPropTypes, TextPropTypes } from "@config";

export default class Input extends Component {
    state = {
        borderWidth: 1,
        fontWeight: '500'
    }

  animatableStyle = () => {
    const { animate } = this.props;
    if (this.props.error && animate) return "shake";
    return "";
  };

  getMessageAnimation = () => {
    if (this.props.success || this.props.error) return "fadeIn";
    return "";
  };

  render() {
    const {
      title,
      message,
      placeholder,
      titleStyle,
      containerStyle,
      textInputStyle,
      value,
      onChangeText,
      error,
      success,
      multiline,
      child,
      mask
    } = this.props;

    return (
      <Animatable.View
        animation={this.animatableStyle()}
        style={[styles.container, containerStyle]}
      >
        <Text style={[titleStyle, styles.titleStyle, {fontWeight: this.state.fontWeight}]}>{title}</Text>
        {this.renderTextInput()}
        <Animatable.Text
          animation={this.getMessageAnimation()}
          style={[
            titleStyle,
            error && { color: colors.warning },
            success && { color: colors.success }
          ]}
        >
          {this.getMessage()}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  renderTextInput() {
    const {
      multiline,
      placeholder,
      value,
      onChangeText,
      textInputStyle,
      error,
      mask,
      phone,
      code,
      autoCorrect,
      codeLength,
      codeInputStyle,
      codeContainerStyle,
      inputPosition,
      autoFocus,
      autoCapitalize,
      className,
      size,
      activeColor,
      inactiveColor,
      space,
      onFulfill,
      compareWithCode,
      ignoreCase,
      cellBorderWidth
    } = this.props;

    // Props for confirmation Code //

      return (
        <TextInput
          ref={ref => (this.input = ref)}
          multiline={multiline}
          placeholder={placeholder ? placeholder : "Type here..."}
          value={value}
          onChangeText={onChangeText}
          style={[
            styles.input,
            textInputStyle,
            error && { borderColor: colors.warning },
            {borderWidth: this.state.borderWidth}
          ]}
          placeholderStyle={[]}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          onFocus = {() => this.onFocus()}
          onBlur = {() => this.onBlur()}
        />
      );
  }

  onFocus() {
      this.setState({
          borderWidth: 2.5
      })
  }

  onBlur() {
      this.setState({
          fontWeight: '500',
          borderWidth: 1
      })
  }

  getMessage() {
    const { error, success, errorMessage, successMessage } = this.props;
    if (error) return errorMessage;
    else if (success) return successMessage;
    else return "";
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 4
  },
  titleStyle: {
    color: colorSet.primary,
    marginBottom: 8,
    letterSpacing: 1.2
  },
  input: {
    borderWidth: 2,
    borderRadius: 30,
    height: 40,
    width: dimensions.width*2/3,
    borderColor: colorSet.primary,
    paddingHorizontal: 5,
    color: "#FFF",
    paddingHorizontal: 10
  }
});

Input.defaultProps = {
  mask: "+1 ([000]) [000] [0000]",
  autoCorrect: false
};

Input.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  placeholder: ViewPropTypes.style,
  titleStyle: TextPropTypes.style,
  containerStyle: ViewPropTypes.style,
  textInputStyle: TextPropTypes.style,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
  multiline: PropTypes.bool,
  autoCorrect: PropTypes.bool
};