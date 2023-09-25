import React from "react";
import { Lesson } from "../models/Lesson";
import { View, Text, StyleSheet } from "react-native";

interface LessonCardProps {
  lesson: {
    id: string;
    userId: string;
    reservationNumber: string;
    description: string;
    date: string;
    startTime: string;
    endTime: string;
  };
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>ID: {lesson.id}</Text>
      <Text>UserId: {lesson.userId}</Text>
      <Text>Reservation Number: {lesson.reservationNumber}</Text>
      <Text>Description: {lesson.description}</Text>
      <Text>Date: {lesson.date}</Text>
      <Text>Start Time: {lesson.startTime}</Text>
      <Text>End Time: {lesson.endTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android用
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default LessonCard;
