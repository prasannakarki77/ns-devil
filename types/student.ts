export type Assignment = {
  assignment_name: string;
  score: number;
};

export type Quiz = {
  quiz_name: string;
  score: number;
};

export type Course = {
  course_name: string;
  grade: string;
  exams_score: number;
  assignments: Assignment[];
  quizzes: Quiz[];
};

export type Student = {
  id: number;
  name: string;
  class: string;
  courses: Course[];
};
