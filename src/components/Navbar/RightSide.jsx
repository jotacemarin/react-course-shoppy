/* eslint-disable react/prop-types */
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import ProfileButton from "./ProfileButton";

const RightSide = ({ menuItems }) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <ProfileButton menuItems={menuItems} />
    </div>
  );
};

export default RightSide;
