import { Suspense, useContext } from 'react';
import { Outlet } from "react-router-dom";
import '@/layouts/mainLayout/mainLayout.scss'

import Sidebar from "@/navigation/sidebar/Sidebar";
import Loader from "@/shared/components/loader/Loader";
import SEO from "@/shared/components/seo/SEO";
import ThemeSwitcher from '@/shared/components/theme-switcher';
import AppContext from '@/app/context/AppContext';

function MainLayout() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="l-main">
      <SEO />
      <Sidebar />
      <div className="l-main__content-wrapper">
        <header className="l-main__header">
          <ThemeSwitcher theme={theme} onToggle={toggleTheme} />
        </header>
        <main className="l-main__content">
          <Suspense fallback={<Loader fullScreen />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default MainLayout
