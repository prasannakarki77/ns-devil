import EmptyState from "@/components/EmptyState";
import CourseDetails from "@/components/student/CourseDetails";
import StudentDetails from "@/components/student/StudentDetails";
import { ACADEMICS } from "@/mock/academics";
import { Student } from "@/types/student";

const StudentPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const student: Student | undefined = ACADEMICS.find(
    (student) => student.id === parseInt(params.id)
  );

  if (!student) {
    return <EmptyState />;
  }

  return (
    <div className="flex flex-col gap-5 container p-10">
      <StudentDetails student={student} />
      <CourseDetails courses={student.courses} />
    </div>
  );
};
export default StudentPage;
