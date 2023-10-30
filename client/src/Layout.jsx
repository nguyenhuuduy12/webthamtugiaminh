import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className=" content-wrapper max-w-screen-2xl text-base mx-auto px-8 bg-slate-200">
      <Header />
      <Outlet />
    </div>
  )
}