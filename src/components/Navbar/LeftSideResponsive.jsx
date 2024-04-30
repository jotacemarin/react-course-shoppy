/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const LeftSideResponsive = ({ menuItems, responsiveMenuIsOpen }) => {
  return (
    <div
      className={responsiveMenuIsOpen ? "sm:hidden" : "hidden"}
      id="mobile-menu"
    >
      <div className="space-y-1 px-2 pb-3 pt-2">
        {menuItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium capitalize"
                : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium capitalize"
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideResponsive;
