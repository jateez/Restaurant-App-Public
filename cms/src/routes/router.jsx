import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AddCuisine from "../pages/AddCuisine";
import EditCuisine from "../pages/EditCuisine";
import UploadImage from "../pages/UploadImage";
import AddStaff from "../pages/AddStaff";
import Categories from "../pages/Categories";

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
      {
        path: "cuisines/:cuisineId/patch",
        element: <UploadImage />,
      },
      {
        path: "add-staff",
        element: <AddStaff />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);

export default router;
