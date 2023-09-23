/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      lessons {
        items {
          id
          reservationNumber
          title
          description
          date
          startTime
          endTime
          lessonStatus
          createdAt
          updatedAt
          userLessonsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      lessons {
        items {
          id
          reservationNumber
          title
          description
          date
          startTime
          endTime
          lessonStatus
          createdAt
          updatedAt
          userLessonsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      lessons {
        items {
          id
          reservationNumber
          title
          description
          date
          startTime
          endTime
          lessonStatus
          createdAt
          updatedAt
          userLessonsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
      id
      reservationNumber
      title
      description
      date
      startTime
      endTime
      lessonStatus
      createdAt
      updatedAt
      userLessonsId
      __typename
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
      id
      reservationNumber
      title
      description
      date
      startTime
      endTime
      lessonStatus
      createdAt
      updatedAt
      userLessonsId
      __typename
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
      id
      reservationNumber
      title
      description
      date
      startTime
      endTime
      lessonStatus
      createdAt
      updatedAt
      userLessonsId
      __typename
    }
  }
`;
