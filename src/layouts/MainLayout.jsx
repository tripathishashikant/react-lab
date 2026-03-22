import { Outlet } from "react-router-dom";

import Sidebar from "@/navigation/Sidebar";


function MainLayout() {
  return (
    <div className="l-main">
      <Sidebar />
      <main className="l-main__content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout
