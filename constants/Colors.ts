const primary = "#4527A0";
const tintColorLight = "#ffffff";
const tintColorDark = "#ffffff";
const inactiveTint = "#7986CB";

export default {
  light: {
    headerBar: primary,
    safeArea: primary,
    text: "#000",
    background: "#fff",
    tabIconDefault: inactiveTint,
    tabIconSelected: tintColorLight,
    tabBackground: primary,
    contentBackground: "#efeff4",
    card: "#fff",
  },
  dark: {
    headerBar: primary,
    safeArea: "#121212",
    text: "#fff",
    background: "#000",
    tabIconDefault: "#8d8d8d",
    tabIconSelected: tintColorDark,
    tabBackground: "#121212",
    contentBackground: "#171717",
    card: "#2b2b2b",
  },
};
