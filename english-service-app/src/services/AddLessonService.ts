import { API, graphqlOperation } from "aws-amplify";
import { createLesson } from "../graphql/mutations";
import { LessonStatus } from "../models/Lesson";

export const createNewLesson = async (data: string, startTime: string) => {
  const newLessonData = {
    reservationNumber: "BK2000-9999",
    userId: "99999",
    title: "dummy title",
    description: "dummy description",
    date: data,
    startTime: startTime,
    endTime: "11:00",
    lessonStatus: LessonStatus.UNDONE,
    approved: false,
  };
  try {
    const newLesson = await API.graphql(
      graphqlOperation(createLesson, { input: newLessonData })
    );
    console.log("New Lesson:", newLesson);
  } catch (error) {
    console.log("Error adding new lesson:", error);
  }
};
