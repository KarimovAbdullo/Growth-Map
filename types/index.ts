export type LessonStatus = 'done' | 'active' | 'locked';

export interface Lesson {
  id: number;
  title: string;
  status: LessonStatus;
}

export interface LessonItemProps {
  lesson: Lesson;
  onPress: (lesson: Lesson) => void;
}
