import { API, graphqlOperation } from "aws-amplify";
import { listLessons } from "../graphql/queries";
import { Lesson } from "../models/Lesson";

export const fetchLessons = async (): Promise<Lesson[]> => {
  try {
    const data = (await API.graphql(graphqlOperation(listLessons))) as {
      data: { listLessons: { items: Lesson[] } };
    };

    if ("errors" in data) {
      console.error("Error fetching lessons:", data.errors);
      return [];
    }

    console.log("Fetching lessons:", data);
    return data.data.listLessons.items.map((lesson: Lesson) => {
      return {
        id: lesson.id,
        reservationNumber: lesson.reservationNumber,
        description: lesson.description,
        date: lesson.date,
        startTime: lesson.startTime,
        endTime: lesson.endTime,
        title: lesson.title,
        lessonStatus: lesson.lessonStatus,
      };
    });
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw new Error("Error fetching lessons");
  }
};
