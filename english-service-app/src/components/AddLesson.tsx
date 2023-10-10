import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet, Text } from "react-native";
import { handleAddLesson } from "../services/AddDummyLessonService";
import { createNewLesson } from "../services/AddLessonService";

const AddLessonForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");

  const handleModalAddLesson = async () => {
    // ここで入力された内容を使用してLesson情報をAppSyncにmutationする処理を書く
    // 例: handleAddLessonWithParams(date, startTime);
    try {
      await createNewLesson(date, startTime);
      setModalVisible(false);
      console.log("Success create lesson");
    } catch (error) {
      console.error("Error create lesson:", error);
    } finally {
      setModalVisible(false);
    }
  };

  return (
    <View>
      <Button title="Add Dummy Lesson" onPress={handleAddLesson} />
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Date:</Text>
            <TextInput
              style={styles.input}
              value={date}
              onChangeText={setDate}
              placeholder="Enter Date"
            />

            <Text>Start Time:</Text>
            <TextInput
              style={styles.input}
              value={startTime}
              onChangeText={setStartTime}
              placeholder="Enter Start Time"
            />

            <Button title="Add Lesson" onPress={handleModalAddLesson} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    width: 200,
  },
});

export default AddLessonForm;
