import { RouteObject } from "react-router-dom";
import { routes as billsRoutes } from "./features/bills/routes";
import { App } from "./features/App";
import Homepage from "./features/Homepage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      ...billsRoutes,
    ],
  },
];
