import Header from "./header/header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}