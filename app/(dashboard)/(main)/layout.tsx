import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/utils/theme-provider";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="h-[calc(100vh-4rem)] flex w-full">
          <div className="">
            <AppSidebar />
          </div>
          <div className="flex flex-col w-full">
            <Header className="w-full" />
            {children}
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
