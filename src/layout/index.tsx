import React from "react";
import { LayoutProps } from "./layot.props";
import { Navbar } from "@/components";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
