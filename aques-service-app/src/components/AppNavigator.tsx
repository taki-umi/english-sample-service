import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LessonList from "./LessonList";
import AddLesson from "./AddLesson";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>HOME</Text>
  </View>
);

const MyPageScreen: React.FC = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>MY PAGE</Text>
  </View>
);

const LessonsScreen: React.FC = () => (
  <View style={{ flex: 1 }}>
    <LessonList />
    <AddLesson />
  </View>
);

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lessons" component={LessonsScreen} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
