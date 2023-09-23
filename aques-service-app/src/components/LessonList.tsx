import React, { useEffect, useState } from "react";
import { fetchLessons } from "../services/LessonService";
import { Lesson } from "../models/Lesson";
import { View, Text, FlatList } from "react-native";
import LessonCard from "./LessonCard"; // LessonCard コンポーネントをインポート

const LessonList = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isGetLessons, setIsGetLessons] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchLessons();
        setLessons(result);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      } finally {
        setIsGetLessons(false);
      }
    };

    fetchData();
  }, []);

  // ローディング中はローディングメッセージを表示
  if (isGetLessons) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        data={lessons}
        keyExtractor={(lesson) => lesson.id}
        renderItem={({ item }) => <LessonCard lesson={item} />} // LessonCard コンポーネントを使用
      />
    </View>
  );
};

export default LessonList;
