import React from "react";
import { View, Text, StatusBar, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text1}>Please Login</Text>
        <Text style={styles.text2}>UserName:</Text>
        <Text style={styles.text2}>Password:</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    height: 700,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 40,
  },
  text2: {
    fontSize: 25,
  },
});

export default App;
