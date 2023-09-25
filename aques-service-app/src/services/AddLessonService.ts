import { API, graphqlOperation } from "aws-amplify";
import { createLesson } from "../graphql/mutations"; // Amplify CLIで自動生成されたmutation
import { LessonStatus } from "../models/Lesson";

export const handleAddLesson = async () => {
  const dummyLessonData = {
    reservationNumber: "BK2000-9999",
    userId: "99999",
    title: "dummy title",
    description: "dummy description",
    date: "2021-01-01",
    startTime: "10:00",
    endTime: "11:00",
    lessonStatus: LessonStatus.UNDONE,
  };
  try {
    const newLesson = await API.graphql(
      graphqlOperation(createLesson, { input: dummyLessonData })
    );
    console.log("New Lesson:", newLesson);
  } catch (error) {
    console.log("Error adding new lesson:", error);
  }
};
