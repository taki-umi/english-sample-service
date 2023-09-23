import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

import LessonList from "./src/components/LessonList";
import AddLessonForm from "./src/components/AddLesson";

export default function App() {
  const [showLessonList, setShowLessonList] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Get Lesson"
        onPress={() => setShowLessonList(!showLessonList)} // ボタンが押されたらステートを更新
      />
      {showLessonList && <LessonList />}
      <StatusBar style="auto" />
      <AddLessonForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});
