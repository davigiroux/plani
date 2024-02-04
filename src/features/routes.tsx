import { RouteObject } from "react-router-dom";
import App from "../App";
import { BillsPage } from "./bills";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bills",
    element: <BillsPage />,
  },
  {
    path: "/bills/:id",
    element: <App />,
  },
  {
    path: "/bills/create",
    element: <App />,
  },
  {
    path: "/bills/:id/edit",
    element: <App />,
  },
];
