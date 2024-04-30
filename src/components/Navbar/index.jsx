import { useState } from "react";
import LeftSide from "./LeftSide";
import LeftSideResponsive from "./LeftSideResponsive";
import RightSide from "./RightSide";

const LEFT_ROUTES = [
  { to: "all", label: "all" },
  { to: "clothes", label: "clothes" },
  { to: "furnitures", label: "furnitures" },
  { to: "toys", label: "toys" },
  { to: "others", label: "others" },
];

const RIGHT_ROUTES = [
  { to: "my-account", label: "my account" },
  { to: "my-orders", label: "my orders" },
  { to: "sign-in", label: "sign in" },
];

const Navbar = () => {
  const [responsiveMenuIsOpen, setResponsiveMenuIsOpen] = useState(false);

  const handleResponsiveMenuToggle = () =>
    setResponsiveMenuIsOpen((isOpen) => !isOpen);

  return (
    <nav className="fixed top-0 w-full z-10 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <LeftSide
            menuItems={LEFT_ROUTES}
            responsiveMenuIsOpen={responsiveMenuIsOpen}
            handleResponsiveMenuToggle={handleResponsiveMenuToggle}
          />

          <RightSide menuItems={RIGHT_ROUTES} />
        </div>
      </div>

      <LeftSideResponsive
        menuItems={LEFT_ROUTES}
        responsiveMenuIsOpen={responsiveMenuIsOpen}
      />
    </nav>
  );
};

export default Navbar;
