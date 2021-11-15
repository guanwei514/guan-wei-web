import React from "react";
import Navbar from "./Navbar";

const Common = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <>{children}</>
    </div>
  );
};

export default Common;
