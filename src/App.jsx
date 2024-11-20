import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import { Services } from "./Pages/Services/Services";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
