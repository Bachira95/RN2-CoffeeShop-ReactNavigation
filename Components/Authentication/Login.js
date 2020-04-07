import React from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";

const Login = ({ navigation }) => (
  <View style={styles.authContainer}>
    <Text style={styles.authTitle}>Login</Text>
    <TextInput
      style={styles.authTextInput}
      placeholder="Username"
      placeholderTextColor="#A6AEC1"
    />
    <TextInput
      style={styles.authTextInput}
      placeholder="Password"
      placeholderTextColor="#A6AEC1"
      secureTextEntry={true}
    />
    <TouchableOpacity
      style={styles.authButton}
      onPress={() => navigation.navigate("CoffeeList")}
    >
      <Text style={styles.authButtonText}>Log in</Text>
    </TouchableOpacity>
    <Text
      style={styles.authOther}
      onPress={() => navigation.navigate("Signup")}
    >
      Click here to register!
    </Text>
  </View>
);

export default Login;
