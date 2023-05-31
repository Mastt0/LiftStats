import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Settings = () => {
  return (
    <View style={[styles.container]}>
      <Text>Here are the Settings</Text>
    </View>
  );
};

export default Settings;
