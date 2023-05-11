import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to LiftStats!</Text>
      <Text>Saved Workouts:</Text>
      <Text>Workout 1</Text>
      <Text>Workout 2</Text>
      <Text>Workout 3</Text>
      <Text>Workout 4</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "springgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
