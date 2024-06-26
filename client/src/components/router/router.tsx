import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main_layouts";
import { Home } from "../home/home";
import { MisdemeanourPage } from "../misdemeanour/misdemeanour-page";
import { Confession } from "../confession/confession";
import NotFound from "../not_found/not_found";

export const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/misdemeanour" element={<MisdemeanourPage />} />
      <Route path="/confession" element={<Confession />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

/* 
********************************************************************************************************
* Following code is when I used the use context from the router to make it available to all the routes *
********************************************************************************************************
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main_layouts";
import { Home } from "../home/home";
import { MisdemeanourPage } from "../misdemeanour/misdemeanour-page";
import { Confession } from "../confession/confession";
import NotFound from "../not_found/not_found";
import {
  Misdemeanour,
  MisdemeanourContext,
} from "../../types/misdemeanour.types";

export const misdemeanourListContext = React.createContext<
  MisdemeanourContext | undefined
>(undefined);

export const Router = () => {
   const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);

  return (
    <misdemeanourListContext.Provider
      value={{ misdemeanours, setMisdemeanours }}
    >
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/misdemeanour" element={<MisdemeanourPage />} />
        <Route path="/confession" element={<Confession />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </misdemeanourListContext.Provider>
  );
};
*/
