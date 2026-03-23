import { Outlet } from "react-router-dom";
import '@/layouts/mainLayout/mainLayout.scss'

import Sidebar from "@/navigation/sidebar/Sidebar";

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
