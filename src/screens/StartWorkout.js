import React from "react";
import { View, StatusBar, SafeAreaView, Text } from "react-native";
import { Calendar } from "react-native-calendars";

const StartWorkout = () => {
  return (
    <View>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <Text>Select Calendar Day to Get Started</Text>
        <Calendar />
      </SafeAreaView>
    </View>
  );
};

export default StartWorkout;
