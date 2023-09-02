import ClientOnly from "@/components/ClientOnly";
import { SignInForm } from "@/components/forms/SignInForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-4 mt-[10vh]">
      <ClientOnly>
        <SignInForm />
      </ClientOnly>
    </main>
  );
}
