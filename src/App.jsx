import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
