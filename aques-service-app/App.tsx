import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/components/AppNavigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});
