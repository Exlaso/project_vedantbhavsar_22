"use client";
import LoginForm from "@/components/auth/login";
import SignUpForm from "@/components/auth/register";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
