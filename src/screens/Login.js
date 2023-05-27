import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { CheckBox } from "react-native-elements";

const Login = () => {
  const [rememberUsername, setRememberUsername] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View>
          <CheckBox
            title="Remember Username"
            checked={rememberUsername}
            onPress={() => setRememberUsername(!rememberUsername)}
          />
          <CheckBox
            title="Remember Password"
            checked={rememberPassword}
            onPress={() => setRememberPassword(!rememberPassword)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text>Don't have an account?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "cyan",
    borderRadius: 5,
    padding: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
