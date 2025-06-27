import React, { ReactNode } from "react";
import DashboardHeader from "./components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}
