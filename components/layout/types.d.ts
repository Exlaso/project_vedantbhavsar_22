import { LinkProps } from "@tanstack/react-router";

interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
}

interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
}

interface BaseNavItem {
  title: string;
  badge?: string;
  icon?: React.ElementType | string;
}

type NavLink = BaseNavItem & {
  url: LinkProps["to"];
  items?: never;
  visible?: string[];
};

type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: LinkProps["to"] })[];
  url?: never;
  visible?: string[];
};

type NavItem = NavCollapsible | NavLink;

interface NavGroup {
  title: string;
  href?: string;
  items: NavItem[];
}

interface SidebarData {
  user: User;
  teams: Team[];
  navGroups: NavGroup[];
}

export type { SidebarData, NavGroup, NavItem, NavCollapsible, NavLink };
