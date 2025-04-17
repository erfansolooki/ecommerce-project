import { createBrowserRouter } from "react-router-dom";
import { PermissionCheckMiddleware } from "./permissionCheckMiddleware";
import { ProtectedRoutes } from "./protectedRoutes";
import { RedirectTo } from "./redirectTo";
import { BASE_ROUTE, HOME_ROUTE, ORDER_ROUTE } from "./routesVar";
import { lazy } from "react";
import { Layout } from "../layout";

const HomePage = lazy(() =>
  import("../pages/home").then((page) => ({
    default: page.Home,
  }))
);

const OrderPage = lazy(() =>
  import("../pages/order").then((page) => ({
    default: page.Order,
  }))
);

export const Routes = createBrowserRouter([
  {
    element: <RedirectTo />,
    path: BASE_ROUTE,
  },
  {
    element: <PermissionCheckMiddleware />,
    children: [
      {
        element: <ProtectedRoutes />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                element: <HomePage />,
                path: HOME_ROUTE,
                handle: {
                  permissions: [1],
                },
              },

              {
                element: <OrderPage />,
                path: ORDER_ROUTE,
                handle: {
                  permissions: [1],
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);
