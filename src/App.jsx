import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import { Services } from "./Pages/Services/Services";
import { About } from "./Pages/About/About";
import { Vacancies } from "./Pages/Vacancies/Vacancies";
import { Blog } from "./Pages/Blog/Blog";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};
