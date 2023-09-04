import ClientOnly from "@/components/ClientOnly";
import { SignInForm } from "@/components/forms/SignInForm";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-4 mt-[10vh]">
      {!currentUser ? (
        <ClientOnly>
          <SignInForm />
        </ClientOnly>
      ) : (
        "hello"
      )}
    </main>
  );
}
