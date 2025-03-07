import { AppSidebar } from "@/components/layout/app-sidebar";
import Header from "@/components/layout/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="h-screen flex w-full">
        <div className="">
          <AppSidebar />
        </div>
        <div className="flex flex-col w-full">
          <Header className="w-full" />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
