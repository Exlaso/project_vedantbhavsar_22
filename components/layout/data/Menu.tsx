import { AudioWaveform, Bot, Command, GalleryVerticalEnd } from "lucide-react";
import { type SidebarData } from "../types";
import {
  House,
  GraduationCap,
  Users,
  CircleUser,
  NotebookPen,
  Presentation,
  Calendar,
  BookCheck,
  BookPlus,
  ClipboardCheck,
  FileChartColumn,
  CalendarClock,
  Mail,
  Volume2,
  SquareUserRound,
  Settings,
  LogOut,
} from "lucide-react";

export const menuItems: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
    role: "admin",
  },
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],

  navGroups: [
    {
      title: "General",
      items: [
        {
          icon: House,
          title: "Dashboard",
          url: `/${["dashboard"]}`,
          visible: ["admin", "dashboard"],
        },
        {
          icon: GraduationCap,
          title: "Fitness Track",
          url: "/fitness",
          visible: ["user"],
        },
        {
          icon: Bot,
          title: "MediAssist",
          url: "/mediassist",
          visible: ["admin", "user"],
        },
      ],
    },

    {
      title: "OTHER",

      items: [
        {
          icon: SquareUserRound,
          title: "Profile",
          url: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: Settings,
          title: "Settings",
          url: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: LogOut,
          title: "Logout",
          url: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ],
};
