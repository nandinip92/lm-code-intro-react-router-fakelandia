import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { Footer } from "../footer/footer";

export const MainLayout = () => (
  <>
    <Header />
    <main className="fakelandiaMain">
      <Outlet />
    </main>
    <Footer />
  </>
);
