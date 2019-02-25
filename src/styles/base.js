import { StyleSheet, Dimensions } from "react-native";

export const dimensions = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
};

export const colors = {
  primary: '#7EB72E',
  darkPrimary: "#3d3d3d",
  textPrimary: "#3d3d3d",
  textSecondary: "#7d7d7d",
  warning: "#F7A039",
  success: "#5EC21D",
  selected: "#1171C3"
};

export const padding = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  family: "Montserrat"
};
