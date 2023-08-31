import ClientOnly from "@/components/ClientOnly";
import { SignInForm } from "@/components/forms/SignInForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-4">
      <ClientOnly>
        <SignInForm />
      </ClientOnly>
    </main>
  );
}
