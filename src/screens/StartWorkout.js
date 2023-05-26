import React from "react";
import { View, StatusBar, SafeAreaView, Text } from "react-native";

const StartWorkout = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <Text>Select Calendar Day to Get Started</Text>
      </SafeAreaView>
    </View>
  );
};

export default StartWorkout;
