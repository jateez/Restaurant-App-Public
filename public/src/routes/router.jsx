import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import CuisineCardDetail from "../components/CuisineCardDetail";

const router = createBrowserRouter([
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
        element: <CuisineCardDetail />,
      },
    ],
  },
]);

export default router;
