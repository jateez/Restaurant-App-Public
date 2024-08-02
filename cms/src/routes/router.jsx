import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AddCuisine from "../pages/AddCuisine";
import EditCuisine from "../pages/EditCuisine";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <MainLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cuisines/add",
        element: <AddCuisine />,
      },
      {
        path: "cuisines/:cuisineId/edit",
        element: <EditCuisine />,
      },
    ],
  },
]);

export default router;
