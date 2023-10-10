export interface Lesson {
  id: string;
  userId: string;
  reservationNumber: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  lessonStatus: LessonStatus;
  approved: boolean;
}

// レッスンステータス
export enum LessonStatus {
  // 未受講
  UNDONE = "UNDONE",
  // 受講済み
  DONE = "DONE",
  // キャンセル
  CANCEL = "CANCEL",
}
