import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function NavUser() {
  const { user, isLoaded } = useUser();

  // Show loading state if user data isn't loaded yet
  if (!isLoaded) {
    return (
      <div className="flex gap-2 items-center">
        <div className="h-8 w-8 rounded-lg bg-muted animate-pulse"></div>
        <div className="h-4 w-20 bg-muted animate-pulse"></div>
      </div>
    );
  }

  // Get user information from Clerk
  const firstName = user?.firstName || "User";
  const avatarUrl = user?.imageUrl || "/assets/avatar.png"; // Fallback avatar
  const initials = firstName.charAt(0) + (user?.lastName?.charAt(0) || "");

  return (
    <div className="flex gap-2 items-center">
      <div className="grid flex-1 text-right text-sm leading-tight">
        <span className="truncate font-semibold capitalize">{firstName}</span>
      </div>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={avatarUrl} alt={firstName} />
        <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}
