import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import '@/layouts/mainLayout/mainLayout.scss'

import Sidebar from "@/navigation/sidebar/Sidebar";
import Loader from "@/shared/components/loader/Loader";

function MainLayout() {
  return (
    <div className="l-main">
      <Sidebar />
      <main className="l-main__content">
        <Suspense fallback={<Loader fullScreen />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default MainLayout
