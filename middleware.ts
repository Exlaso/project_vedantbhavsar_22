import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"]);
export default clerkMiddleware(async (auth, request, event) => {
  if (!isPublicRoute(request)) await auth.protect();
});

// export default authMiddleware({
//   // Allow signed out users to access the specified routes:
//   // publicRoutes: ['/anyone-can-visit-this-route'],
//   publicRoutes: ["/", "/about", "/how-to-use","/test",'/api/auth'],
//   apiRoutes: ['/api/auth']
// });

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
