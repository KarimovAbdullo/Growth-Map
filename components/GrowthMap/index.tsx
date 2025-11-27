import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  StatusBar,
} from 'react-native';
import { LessonItem } from '../LessonItem';
import { Lesson } from '../../types';

const LESSONS_DATA: Lesson[] = [
  { id: 1, title: 'Welcome Journey', status: 'done' },
  { id: 2, title: 'Переключение на себя', status: 'active' },
  { id: 3, title: 'Источник вдохновения', status: 'locked' },
  { id: 4, title: 'Пространство идей', status: 'locked' },
  { id: 5, title: 'Финальный тест', status: 'locked' },
];

export const GrowthMap: React.FC = () => {
  const handleLessonPress = (lesson: Lesson) => {
    switch (lesson.status) {
      case 'active':
        console.log('Start lesson');
        Alert.alert(
          '🚀 Начать урок',
          `Вы готовы начать урок "${lesson.title}"?\n\nЭтот урок станет важным шагом на вашем пути развития.`,
          [
            { 
              text: '❌ Отмена', 
              style: 'cancel',
              onPress: () => console.log('Cancelled')
            },
            { 
              text: '▶️ Начать', 
              style: 'default',
              onPress: () => {
                console.log('Start lesson');
                Alert.alert('✅ Успех!', 'Урок успешно начат!');
              }
            },
          ],
          { 
            cancelable: true,
            userInterfaceStyle: 'light'
          }
        );
        break;
      case 'locked':
        Alert.alert(
          '🔒 Урок заблокирован',
          `Урок "${lesson.title}" пока недоступен.\n\nСначала необходимо завершить предыдущие уроки. Каждый урок важен для открытия следующего.`,
          [{ 
            text: '👍 Понятно', 
            style: 'default',
            onPress: () => console.log('Understood locked lesson')
          }],
          { 
            cancelable: true,
            userInterfaceStyle: 'light'
          }
        );
        break;
      case 'done':
        Alert.alert(
          '✅ Урок завершен',
          `Урок "${lesson.title}" уже успешно завершен.\n\nПри желании вы можете пересмотреть материал.`,
          [
            { 
              text: '❌ Нет, спасибо', 
              style: 'cancel',
              onPress: () => console.log('No review needed')
            },
            { 
              text: '🔄 Пересмотреть', 
              style: 'default',
              onPress: () => {
                console.log('Review lesson');
                Alert.alert('📚 Пересмотр', 'Материалы урока загружаются...');
              }
            },
          ],
          { 
            cancelable: true,
            userInterfaceStyle: 'light'
          }
        );
        break;
    }
  };

  const renderLessonItem = ({ item }: { item: Lesson }) => (
    <LessonItem lesson={item} onPress={handleLessonPress} />
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>Карта развития</Text>
      <Text style={styles.subtitle}>
        Пройдите все уроки последовательно для достижения цели
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <FlatList
        data={LESSONS_DATA}
        renderItem={renderLessonItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  listContainer: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
});
