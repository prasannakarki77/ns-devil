import { Student } from "@/types/student";

export const ACADEMICS: Student[] = [
  {
    id: 1,
    name: "John Doe",
    class: "Class A",
    courses: [
      {
        course_name: "Mathematics",
        grade: "A",
        exams_score: 95,
        assignments: [
          {
            assignment_name: "Homework 1",
            score: 90,
          },
          {
            assignment_name: "Homework 2",
            score: 95,
          },
        ],
        quizzes: [
          {
            quiz_name: "Quiz 1",
            score: 85,
          },
          {
            quiz_name: "Quiz 2",
            score: 88,
          },
        ],
      },
      {
        course_name: "English",
        grade: "B",
        exams_score: 88,
        assignments: [
          {
            assignment_name: "Essay",
            score: 85,
          },
          {
            assignment_name: "Grammar Test",
            score: 91,
          },
        ],
        quizzes: [
          {
            quiz_name: "Vocabulary Quiz",
            score: 92,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    class: "Class B",
    courses: [
      {
        course_name: "History",
        grade: "B+",
        exams_score: 89,
        assignments: [
          {
            assignment_name: "Research Paper",
            score: 88,
          },
          {
            assignment_name: "Presentation",
            score: 92,
          },
        ],
        quizzes: [
          {
            quiz_name: "Ancient Civilizations",
            score: 85,
          },
          {
            quiz_name: "World Wars",
            score: 92,
          },
        ],
      },
      {
        course_name: "Science",
        grade: "A-",
        exams_score: 92,
        assignments: [
          {
            assignment_name: "Lab Report",
            score: 94,
          },
        ],
        quizzes: [
          {
            quiz_name: "Chemistry Quiz",
            score: 90,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    class: "Class A",
    courses: [
      {
        course_name: "Physics",
        grade: "A",
        exams_score: 96,
        assignments: [
          {
            assignment_name: "Lab Experiment",
            score: 94,
          },
          {
            assignment_name: "Midterm Project",
            score: 98,
          },
        ],
        quizzes: [
          {
            quiz_name: "Mechanics Quiz",
            score: 91,
          },
          {
            quiz_name: "Electromagnetism Quiz",
            score: 97,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Emily Davis",
    class: "Class B",
    courses: [
      {
        course_name: "Art",
        grade: "B-",
        exams_score: 82,
        assignments: [
          {
            assignment_name: "Painting",
            score: 78,
          },
          {
            assignment_name: "Sculpture",
            score: 86,
          },
        ],
        quizzes: [],
      },
      {
        course_name: "Music",
        grade: "A",
        exams_score: 94,
        assignments: [
          {
            assignment_name: "Composition",
            score: 90,
          },
          {
            assignment_name: "Performance",
            score: 98,
          },
        ],
        quizzes: [
          {
            quiz_name: "Music Theory",
            score: 96,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Sophia Wilson",
    class: "Class A",
    courses: [
      {
        course_name: "Computer Science",
        grade: "A+",
        exams_score: 98,
        assignments: [
          {
            assignment_name: "Programming Project",
            score: 100,
          },
          {
            assignment_name: "Algorithm Design",
            score: 97,
          },
        ],
        quizzes: [
          {
            quiz_name: "Data Structures Quiz",
            score: 96,
          },
          {
            quiz_name: "Software Engineering Quiz",
            score: 99,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "William Brown",
    class: "Class C",
    courses: [
      {
        course_name: "Physical Education",
        grade: "C",
        exams_score: 72,
        assignments: [],
        quizzes: [],
      },
    ],
  },
  {
    id: 7,
    name: "Olivia Lee",
    class: "Class A",
    courses: [
      {
        course_name: "Chemistry",
        grade: "A-",
        exams_score: 91,
        assignments: [
          {
            assignment_name: "Lab Report",
            score: 88,
          },
          {
            assignment_name: "Chemical Reactions",
            score: 93,
          },
        ],
        quizzes: [
          {
            quiz_name: "Chemical Bonding Quiz",
            score: 89,
          },
          {
            quiz_name: "Periodic Table Quiz",
            score: 94,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "James Taylor",
    class: "Class B",
    courses: [
      {
        course_name: "Geography",
        grade: "B",
        exams_score: 87,
        assignments: [
          {
            assignment_name: "Map Project",
            score: 85,
          },
          {
            assignment_name: "Country Capitals",
            score: 89,
          },
        ],
        quizzes: [
          {
            quiz_name: "World Geography",
            score: 88,
          },
        ],
      },
    ],
  },
];
