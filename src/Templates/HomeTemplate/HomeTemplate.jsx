import React from "react";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer";
import HeaderHome from "../../Components/HeaderHome";

export default function HomeTemplate() {
  return (
    <div>
      <HeaderHome />
      <Outlet />
      <Footer />
    </div>
  );
}
