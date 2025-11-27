import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LessonItemProps } from '../../types';

const { width } = Dimensions.get('window');

export const LessonItem: React.FC<LessonItemProps> = ({ lesson, onPress }) => {
  const getStatusIcon = () => {
    switch (lesson.status) {
      case 'done':
        return '✓';
      case 'active':
        return '▶';
      case 'locked':
        return '🔒';
      default:
        return '';
    }
  };

  const getContainerStyle = () => {
    switch (lesson.status) {
      case 'done':
        return [styles.container, styles.doneContainer];
      case 'active':
        return [styles.container, styles.activeContainer];
      case 'locked':
        return [styles.container, styles.lockedContainer];
      default:
        return styles.container;
    }
  };

  const getTextStyle = () => {
    switch (lesson.status) {
      case 'done':
        return [styles.title, styles.doneText];
      case 'active':
        return [styles.title, styles.activeText];
      case 'locked':
        return [styles.title, styles.lockedText];
      default:
        return styles.title;
    }
  };

  const getIconStyle = () => {
    switch (lesson.status) {
      case 'done':
        return [styles.icon, styles.doneIcon];
      case 'active':
        return [styles.icon, styles.activeIcon];
      case 'locked':
        return [styles.icon, styles.lockedIcon];
      default:
        return styles.icon;
    }
  };

  return (
    <TouchableOpacity
      style={getContainerStyle()}
      onPress={() => onPress(lesson)}
      activeOpacity={lesson.status === 'locked' ? 1 : 0.7}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={getIconStyle()}>{getStatusIcon()}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={getTextStyle()}>{lesson.title}</Text>
          <Text style={styles.subtitle}>
            {lesson.status === 'done' && 'Завершено'}
            {lesson.status === 'active' && 'Нажмите для начала'}
            {lesson.status === 'locked' && 'Заблокировано'}
          </Text>
        </View>
        <View style={styles.statusIndicator}>
          <View style={[
            styles.indicator,
            lesson.status === 'done' && styles.doneIndicator,
            lesson.status === 'active' && styles.activeIndicator,
            lesson.status === 'locked' && styles.lockedIndicator,
          ]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doneContainer: {
    backgroundColor: '#f0f9ff',
    borderWidth: 1,
    borderColor: '#22c55e',
  },
  activeContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  lockedContainer: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  doneIcon: {
    color: '#22c55e',
  },
  activeIcon: {
    color: '#3b82f6',
  },
  lockedIcon: {
    color: '#94a3b8',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  doneText: {
    color: '#1f2937',
  },
  activeText: {
    color: '#1f2937',
  },
  lockedText: {
    color: '#94a3b8',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  statusIndicator: {
    marginLeft: 12,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  doneIndicator: {
    backgroundColor: '#22c55e',
  },
  activeIndicator: {
    backgroundColor: '#3b82f6',
  },
  lockedIndicator: {
    backgroundColor: '#e2e8f0',
  },
});
