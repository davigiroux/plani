import { BillsPage, BillPage, CreateBillPage, EditBillPage } from ".";

export const routes = [
  {
    path: "/bills",
    element: <BillsPage />,
  },
  {
    path: "/bills/:id",
    element: <BillPage />,
  },
  {
    path: "/bills/create",
    element: <CreateBillPage />,
  },
  {
    path: "/bills/:id/edit",
    element: <EditBillPage />,
  },
];
