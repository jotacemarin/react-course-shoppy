import { useRoutes } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyLastOrder from "../MyLastOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "", element: <Home /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "my-order", element: <MyLastOrder /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default AppRoutes;
