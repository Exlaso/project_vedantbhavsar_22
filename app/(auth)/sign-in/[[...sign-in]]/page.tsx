import LoginForm from "@/components/auth/login";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async () => {
  const islogin = await useAuth();
  if (!islogin.isSignedIn) {
    redirect("/onboarding");
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
