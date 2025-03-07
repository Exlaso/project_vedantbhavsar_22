import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as Clerk from "@clerk/elements/common";
import { Loader } from "lucide-react";

import * as SignUp from "@clerk/elements/sign-up";

export default function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Welcome 👋</h1>
              <p className="text-balance text-muted-foreground">
                Register your account
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid w-full grow items-center  px-4">
                <SignUp.Root>
                  <SignUp.Step
                    name="start"
                    className="w-full space-y-6  px-4 py-10  sm:px-8"
                  >
                    <header className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 40 40"
                        className="mx-auto size-10 text-zinc-950"
                        aria-hidden
                      >
                        <mask
                          id="a"
                          width="40"
                          height="40"
                          x="0"
                          y="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                        </mask>
                        <g fill="currentColor" mask="url(#a)">
                          <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                          <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                        </g>
                      </svg>
                      <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
                        Create an account
                      </h1>
                    </header>
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <div className="space-y-4">
                      <Clerk.Field name="emailAddress" className="space-y-2">
                        <Clerk.Label className="text-sm font-medium text-zinc-950">
                          Email
                        </Clerk.Label>
                        <Clerk.Input
                          type="email"
                          required
                          className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                          placeholder="steve@apple.com"
                        />
                        <Clerk.FieldError className="block text-sm text-red-400" />
                      </Clerk.Field>
                      <Clerk.Field name="password" className="space-y-2">
                        <Clerk.Label className="text-sm font-medium text-zinc-950">
                          Password
                        </Clerk.Label>
                        <Clerk.Input
                          type="password"
                          required
                          className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                          placeholder="Your secure password"
                        />
                        <Clerk.FieldError className="block text-sm text-red-400" />
                      </Clerk.Field>
                    </div>
                    <SignUp.Action
                      submit
                      className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                    >
                      Sign Up
                    </SignUp.Action>
                  </SignUp.Step>
                  <SignUp.Step
                    name="verifications"
                    className="w-full space-y-6   px-4 py-10   sm:px-8"
                  >
                    <header className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 40 40"
                        className="mx-auto size-10 text-zinc-950"
                        aria-hidden
                      >
                        <mask
                          id="a"
                          width="40"
                          height="40"
                          x="0"
                          y="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                        </mask>
                        <g fill="currentColor" mask="url(#a)">
                          <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                          <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                        </g>
                      </svg>
                      <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
                        Verify email code
                      </h1>
                    </header>
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <SignUp.Strategy name="email_code">
                      <Clerk.Field name="code" className="space-y-2">
                        <Clerk.Label className="text-sm font-medium text-zinc-950">
                          Email code
                        </Clerk.Label>
                        <Clerk.Input
                          type="otp"
                          required
                          className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                          placeholder="e.g. 123456"
                        />
                        <Clerk.FieldError className="block text-sm text-red-400" />
                      </Clerk.Field>
                      <SignUp.Action
                        submit
                        className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                      >
                        Verify
                      </SignUp.Action>
                    </SignUp.Strategy>
                    <p className="text-center text-sm text-zinc-500">
                      Already have an account?{" "}
                      <Clerk.Link
                        navigate="sign-in"
                        className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
                      >
                        Sign in
                      </Clerk.Link>
                    </p>
                  </SignUp.Step>
                  <SignUp.Step
                    name="continue"
                    className="w-full space-y-6   px-4 py-10  sm:px-8"
                  >
                    <header className="text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 40 40"
                        className="mx-auto size-10 text-zinc-950"
                        aria-hidden
                      >
                        <mask
                          id="a"
                          width="40"
                          height="40"
                          x="0"
                          y="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                        </mask>
                        <g fill="currentColor" mask="url(#a)">
                          <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                          <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                        </g>
                      </svg>
                      <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950">
                        Continue registration
                      </h1>
                    </header>
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <Clerk.Field name="username" className="space-y-2">
                      <Clerk.Label className="text-sm font-medium text-zinc-950">
                        Username
                      </Clerk.Label>
                      <Clerk.Input
                        type="text"
                        required
                        className="w-full rounded-md bg-white px-3.5 py-2 text-sm outline-none ring-1 ring-inset ring-zinc-300 hover:ring-zinc-400 focus:ring-[1.5px] focus:ring-zinc-950 data-[invalid]:ring-red-400"
                      />
                      <Clerk.FieldError className="block text-sm text-red-400" />
                    </Clerk.Field>
                    <SignUp.Action
                      submit
                      className="w-full rounded-md bg-zinc-950 px-3.5 py-1.5 text-center text-sm font-medium text-white shadow outline-none ring-1 ring-inset ring-zinc-950 hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-950 active:text-white/70"
                    >
                      Continue
                    </SignUp.Action>
                    <p className="text-center text-sm text-zinc-500">
                      Already have an account?{" "}
                      <Clerk.Link
                        navigate="sign-in"
                        className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline"
                      >
                        Sign in
                      </Clerk.Link>
                    </p>
                  </SignUp.Step>
                </SignUp.Root>
              </div>
            </div>
            <div className="grid gap-2"></div>
            <div className="grid grid-cols-3 gap-4">
              {/* ...commented button code... */}
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/sign-up" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>{" "}
          {/* Added closing div tag for the left column */}
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      {/* ...commented terms div... */}
    </div>
  );
}

const Google = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="50px"
      height="50px"
    >
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
};
