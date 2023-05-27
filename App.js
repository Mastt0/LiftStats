import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/screens/Login";
import CreateWorkout from "./src/screens/CreateWorkout";
import StartWorkout from "./src/screens/StartWorkout";
import SignUp from "./src/screens/SignUp";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Start" component={StartWorkout} />
        <Tab.Screen name="Create" component={CreateWorkout} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
