/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const LeftSide = ({
  menuItems,
  responsiveMenuIsOpen,
  handleResponsiveMenuToggle,
}) => {
  return (
    <>
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={responsiveMenuIsOpen}
          onClick={handleResponsiveMenuToggle}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          {responsiveMenuIsOpen ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <NavLink className="flex flex-shrink-0 items-center" to="">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="shoppy"
          />
        </NavLink>

        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {menuItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium capitalize"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium capitalize"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
