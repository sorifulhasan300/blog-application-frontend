import React from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
export default function DashboardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const role = "admin";
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex gap-4">
        <div className="">{admin}</div>
        <div className="">{user}</div>
      </div>
    </SidebarProvider>
  );
}
