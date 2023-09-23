/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        email
        lessons {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $id: ID
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLessons(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
