import { StyleSheet } from "react-native";
import { colors, fonts, padding, dimensions } from "./base.js";

const text = StyleSheet.create({
  largeTitle: {
    fontFamily: fonts.family,
    fontSize: 34,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  title1: {
    fontFamily: fonts.family,
    fontSize: 28,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  title2: {
    fontFamily: fonts.family,
    fontSize: 22,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  title3: {
    fontFamily: fonts.family,
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  headline: {
    fontFamily: fonts.family,
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: "600"
  },
  body: {
    fontFamily: fonts.family,
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  callout: {
    fontFamily: fonts.family,
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  subhead: {
    fontFamily: fonts.family,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  footnote: {
    fontFamily: fonts.family,
    fontSize: 13,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  caption1: {
    fontFamily: fonts.family,
    fontSize: 12,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  caption2: {
    fontFamily: fonts.family,
    fontSize: 11,
    color: colors.textPrimary,
    fontWeight: "500"
  },
  buttonText: {
    fontFamily: fonts.family,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 6
  }
});

export { text };
