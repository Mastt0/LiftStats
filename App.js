import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RadioButton = ({ label, selected, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.radioButton}>
        <View
          style={[
            styles.radioButtonIcon,
            { borderColor: selected ? "green" : "gray" },
          ]}
        >
          {selected && <View style={styles.radioButtonSelected} />}
        </View>
        <Text style={styles.radioButtonLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleWorkoutSelect = (workout) => {
    if (selectedWorkout === workout) {
      setSelectedWorkout(null); // Deselect if the same workout is selected
    } else {
      setSelectedWorkout(workout); // Select the new workout
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to LiftStats!</Text>
      <Text style={styles.subheading}>Saved Workouts:</Text>
      <RadioButton
        label="Workout 1"
        selected={selectedWorkout === "Workout 1"}
        onSelect={() => handleWorkoutSelect("Workout 1")}
      />
      <RadioButton
        label="Workout 2"
        selected={selectedWorkout === "Workout 2"}
        onSelect={() => handleWorkoutSelect("Workout 2")}
      />
      <RadioButton
        label="Workout 3"
        selected={selectedWorkout === "Workout 3"}
        onSelect={() => handleWorkoutSelect("Workout 3")}
      />
      <RadioButton
        label="Workout 4"
        selected={selectedWorkout === "Workout 4"}
        onSelect={() => handleWorkoutSelect("Workout 4")}
      />
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
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "green",
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  heading: {
    fontSize: 28,
    marginBottom: 50,
  },
  subheading: {
    fontSize: 22,
    marginBottom: 10,
  },
});
