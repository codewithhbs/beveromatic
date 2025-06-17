"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Layout from "../app/admin/Layout";
import { SessionProvider } from "next-auth/react";
import Whatsapp from "./Whatsapp/Whatsapp";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  // console.log(isAdminRoute);
  if (isAdminRoute) {
    return (
      <SessionProvider>
        <Layout>{children}</Layout>
      </SessionProvider>
    );
  }

  return (
    <>
        <Header />
        {children}
        <Footer />
        <Whatsapp />
    </>
  );
};

export default MainLayout;
