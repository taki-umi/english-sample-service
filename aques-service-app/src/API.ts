/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  lessons?: ModelLessonConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items:  Array<Lesson | null >,
  nextToken?: string | null,
};

export type Lesson = {
  __typename: "Lesson",
  id: string,
  reservationNumber: string,
  title?: string | null,
  description?: string | null,
  date: string,
  startTime: string,
  endTime: string,
  lessonStatus: string,
  createdAt: string,
  updatedAt: string,
  userLessonsId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  reservationNumber: string,
  title?: string | null,
  description?: string | null,
  date: string,
  startTime: string,
  endTime: string,
  lessonStatus: string,
  userLessonsId?: string | null,
};

export type ModelLessonConditionInput = {
  reservationNumber?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  lessonStatus?: ModelStringInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  not?: ModelLessonConditionInput | null,
  userLessonsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLessonInput = {
  id: string,
  reservationNumber?: string | null,
  title?: string | null,
  description?: string | null,
  date?: string | null,
  startTime?: string | null,
  endTime?: string | null,
  lessonStatus?: string | null,
  userLessonsId?: string | null,
};

export type DeleteLessonInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelLessonFilterInput = {
  id?: ModelIDInput | null,
  reservationNumber?: ModelStringInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  date?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  lessonStatus?: ModelStringInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
  userLessonsId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLessonFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  reservationNumber?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  lessonStatus?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLessonFilterInput | null > | null,
  or?: Array< ModelSubscriptionLessonFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        reservationNumber: string,
        title?: string | null,
        description?: string | null,
        date: string,
        startTime: string,
        endTime: string,
        lessonStatus: string,
        createdAt: string,
        updatedAt: string,
        userLessonsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        reservationNumber: string,
        title?: string | null,
        description?: string | null,
        date: string,
        startTime: string,
        endTime: string,
        lessonStatus: string,
        createdAt: string,
        updatedAt: string,
        userLessonsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        reservationNumber: string,
        title?: string | null,
        description?: string | null,
        date: string,
        startTime: string,
        endTime: string,
        lessonStatus: string,
        createdAt: string,
        updatedAt: string,
        userLessonsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLessonMutationVariables = {
  input: CreateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type CreateLessonMutation = {
  createLesson?:  {
    __typename: "Lesson",
    id: string,
    reservationNumber: string,
    title?: string | null,
    description?: string | null,
    date: string,
    startTime: string,
    endTime: string,
    lessonStatus: string,
    createdAt: string,
    updatedAt: string,
    userLessonsId?: string | null,
  } | null,
};

export type UpdateLessonMutationVariables = {
  input: UpdateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type UpdateLessonMutation = {
  updateLesson?:  {
    __typename: "Lesson",
    id: string,
    reservationNumber: string,
    title?: string | null,
    description?: string | null,
    date: string,
    startTime: string,
    endTime: string,
    lessonStatus: string,
    createdAt: string,
    updatedAt: string,
    userLessonsId?: string | null,
  } | null,
};

export type DeleteLessonMutationVariables = {
  input: DeleteLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type DeleteLessonMutation = {
  deleteLesson?:  {
    __typename: "Lesson",
    id: string,
    reservationNumber: string,
    title?: string | null,
    description?: string | null,
    date: string,
    startTime: string,
    endTime: string,
    lessonStatus: string,
    createdAt: string,
    updatedAt: string,
    userLessonsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        reservationNumber: string,
        title?: string | null,
        description?: string | null,
        date: string,
        startTime: string,
        endTime: string,
        lessonStatus: string,
        createdAt: string,
        updatedAt: string,
        userLessonsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      lessons?:  {
        __typename: "ModelLessonConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson?:  {
    __typename: "Lesson",
    id: string,
    reservationNumber: string,
    title?: string | null,
    description?: string | null,
    date: string,
    startTime: string,
    endTime: string,
    lessonStatus: string,
    createdAt: string,
    updatedAt: string,
    userLessonsId?: string | null,
  } | null,
};

export type ListLessonsQueryVariables = {
  id?: string | null,
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLessonsQuery = {
  listLessons?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      reservationNumber: string,
      title?: string | null,
      description?: string | null,
      date: string,
      startTime: string,
      endTime: string,
      lessonStatus: string,
      createdAt: string,
      updatedAt: string,
      userLessonsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        reservationNumber: string,
        title?: string | null,
        description?: string | null,
        date: string,
        startTime: string,
        endTime: string,
        lessonStatus: string,
        createdAt: string,
        updatedAt: string,
        userLessonsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        reservationNumber: string,
        title?: string | null,
        description?: string | null,
        date: string,
        startTime: string,
        endTime: string,
        lessonStatus: string,
        createdAt: string,
        updatedAt: string,
        userLessonsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      items:  Array< {
        __typename: "Lesson",
        id: string,
        reservationNumber: string,
        title?: string | null,
        description?: string | null,
        date: string,
        startTime: string,
        endTime: string,
        lessonStatus: string,
        createdAt: string,
        updatedAt: string,
        userLessonsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson?:  {
    __typename: "Lesson",
    id: string,
    reservationNumber: string,
    title?: string | null,
    description?: string | null,
    date: string,
    startTime: string,
    endTime: string,
    lessonStatus: string,
    createdAt: string,
    updatedAt: string,
    userLessonsId?: string | null,
  } | null,
};

export type OnUpdateLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson?:  {
    __typename: "Lesson",
    id: string,
    reservationNumber: string,
    title?: string | null,
    description?: string | null,
    date: string,
    startTime: string,
    endTime: string,
    lessonStatus: string,
    createdAt: string,
    updatedAt: string,
    userLessonsId?: string | null,
  } | null,
};

export type OnDeleteLessonSubscriptionVariables = {
  filter?: ModelSubscriptionLessonFilterInput | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson?:  {
    __typename: "Lesson",
    id: string,
    reservationNumber: string,
    title?: string | null,
    description?: string | null,
    date: string,
    startTime: string,
    endTime: string,
    lessonStatus: string,
    createdAt: string,
    updatedAt: string,
    userLessonsId?: string | null,
  } | null,
};
