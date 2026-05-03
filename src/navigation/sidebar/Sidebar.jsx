import { Link, NavLink } from "react-router-dom"
import '@/navigation/sidebar/sidebar.scss'

import { sidebarMenu } from "@/navigation/menu"
import Logo from "@/shared/components/logo/Logo";

function Sidebar() {
  return (
    <aside className="l-sidebar">
      <header className="l-sidebar__header">
        <Link to="/" className="l-sidebar__logo-link" aria-label="Go to homepage">
          <Logo />
        </Link>
      </header>
      <nav className="l-sidebar__nav">
        {sidebarMenu.map((feature) => (
          <NavLink
            key={feature.id}
            to={feature.path}
            className="l-sidebar__link"
          >
            {feature.title}
          </NavLink>
        ))}
      </nav>
      <div className="l-sidebar__divider"></div>
      <footer className="l-sidebar__footer">
        <p>&copy; {new Date().getFullYear()} React Lab</p>
      </footer>
    </aside>
  );
}

export default Sidebar
