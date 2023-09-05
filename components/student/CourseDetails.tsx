import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Course } from "@/types/student";
import CourseStats from "./CourseStats";

interface CourseDetailsProps {
  courses: Course[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courses }) => {
  return (
    <Tabs
      defaultValue={courses[0].course_name}
      className="w-full border shadow rounded-lg"
    >
      <TabsList>
        {courses.map((course) => (
          <TabsTrigger value={course.course_name} key={course.course_name}>
            {course.course_name}
          </TabsTrigger>
        ))}
      </TabsList>
      {courses.map((course) => (
        <TabsContent value={course.course_name} key={course.course_name}>
          <CourseStats course={course} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CourseDetails;
