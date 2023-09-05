import { SignInForm } from "@/components/forms/SignInForm";
import getCurrentUser from "./actions/getCurrentUser";
import { StudentTable } from "@/components/academics/StudentTable";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <main className=" container min-h-screen p-10 ">
      {!currentUser ? (
        <div className="mt-[10vh] flex flex-col items-center">
          <SignInForm />
        </div>
      ) : (
        <div className="">
          <h1 className="text-xl font-bold mb-4 ">Students Table</h1>
          <StudentTable />
        </div>
      )}
    </main>
  );
}
