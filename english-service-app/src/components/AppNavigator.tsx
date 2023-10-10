import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LessonList from "./LessonList";
import LessonDetail from "./LessonDetail";
import AddLesson from "./AddLesson";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

function AppStacNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LessonList" component={LessonList} />
        <Stack.Screen name="LessonDetail" component={LessonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
