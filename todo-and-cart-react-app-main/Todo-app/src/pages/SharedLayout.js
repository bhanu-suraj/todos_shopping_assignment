import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main style={{ marginTop: "70px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
