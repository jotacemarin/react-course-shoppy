import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

// eslint-disable-next-line react/prop-types
const ProfileButton = ({ menuItems = [] }) => {
  const [dropdownIsHidden, setDropdownIsHidden] = useState(true);

  const toggleDropdownIsHidden = () => setDropdownIsHidden((isOpen) => !isOpen);

  const keyDownEvent = useCallback(({ key }) => {
    if (key === "Esc" || key === "Escape") {
      setDropdownIsHidden(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyDownEvent);

    return () => {
      document.removeEventListener("keydown", keyDownEvent);
    };
  }, [keyDownEvent]);

  return (
    <>
      <div className="relative ml-3">
        <button
          type="button"
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded={dropdownIsHidden}
          aria-haspopup="true"
          onClick={toggleDropdownIsHidden}
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>

        {!dropdownIsHidden && (
          <button
            className="fixed top-0 right-0 bottom-0 left-0 h-full w-full"
            onClick={toggleDropdownIsHidden}
          />
        )}

        <div
          className={classNames(
            "absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            { hidden: dropdownIsHidden }
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          {menuItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="block px-4 py-2 text-sm text-gray-700 capitalize"
              role="menuitem"
              id="user-menu-item-0"
              onClick={toggleDropdownIsHidden}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileButton;
