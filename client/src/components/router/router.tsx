import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main_layouts";
import { Home } from "../home/home";
import { Misdemeanour } from "../misdemeanour/misdemeanour";
import { Confession } from "../confession/confession";
import NotFound from "../not_found/not_found";

export const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/misdemeanour" element={<Misdemeanour />} />
      <Route path="/confession" element={<Confession />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
