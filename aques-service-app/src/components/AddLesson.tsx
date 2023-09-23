import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { handleAddLesson } from "../services/AddLessonService";

const AddLessonForm = () => {
  return (
    <View>
      <Button title="Add Dummy Lesson" onPress={handleAddLesson} />
    </View>
  );
};

export default AddLessonForm;
