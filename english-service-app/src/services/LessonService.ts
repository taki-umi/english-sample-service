import { API, graphqlOperation } from "aws-amplify";
import { lessonsByUserId } from "../graphql/queries";
import { Lesson } from "../models/Lesson";

export const fetchLessons = async (): Promise<Lesson[]> => {
  try {
    const data = (await API.graphql(
      graphqlOperation(lessonsByUserId, { userId: "99999" }) // TODO: ログイン時に取得したユーザIDを指定する
    )) as {
      data: { lessonsByUserId: { items: Lesson[] } };
    };

    if ("errors" in data) {
      console.error("Error fetching lessons:", data.errors);
      return [];
    }

    console.log("Fetching lessons:", data);
    return data.data.lessonsByUserId.items.map((lesson: Lesson) => {
      return {
        id: lesson.id,
        userId: lesson.userId,
        reservationNumber: lesson.reservationNumber,
        description: lesson.description,
        date: lesson.date,
        startTime: lesson.startTime,
        endTime: lesson.endTime,
        title: lesson.title,
        lessonStatus: lesson.lessonStatus,
        approved: lesson.approved,
      };
    });
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw new Error("Error fetching lessons");
  }
};
