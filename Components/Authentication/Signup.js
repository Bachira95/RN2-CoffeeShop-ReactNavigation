import React from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

const Signup = ({ navigation }) => (
  <View style={styles.authContainer}>
    <Text style={styles.authTitle}>Signup</Text>
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
      <Text style={styles.authButtonText}>Sign up</Text>
    </TouchableOpacity>
    <Text style={styles.authOther} onPress={() => navigation.navigate("Login")}>
      Click here to log in!
    </Text>
  </View>
);

export default Signup;
