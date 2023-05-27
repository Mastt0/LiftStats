import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/LoginScreen";
import CreateWorkout from "./src/screens/CreateWorkout";
import StartWorkout from "./src/screens/StartWorkout";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Start" component={StartWorkout} />
        <Tab.Screen name="Create" component={CreateWorkout} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
