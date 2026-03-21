import { NavLink } from "react-router-dom"
import { features } from "@/features"

function Sidebar() {
  return (
    <aside className="l-sidebar">
      <nav className="l-sidebar__nav">
        <NavLink to="/topics" className="l-sidebar__link" end>
          All Topics
        </NavLink>

        <div className="l-sidebar__divider"></div>

        {features.map((feature) => (
          <NavLink
            key={feature.id}
            to={feature.path}
            className="l-sidebar__link"
          >
            {feature.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar
