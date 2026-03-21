// src/navigation/SidebarItem/SidebarItem.jsx
import { NavLink } from "react-router-dom";
import './SidebarItem.scss';

function SidebarItem({ item }) {
  return (
    <li className="c-sidebar-item">
      <NavLink to={item.path} className={({ isActive }) => `c-sidebar-item__link ${isActive ? 'is-active' : ''}`}>
        {item.title}
      </NavLink>
    </li>
  );
}

export default SidebarItem;