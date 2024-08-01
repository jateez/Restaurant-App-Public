import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":id",
      },
    ],
  },
]);

export default router;
