import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Login,
  Register,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from "./pages";
import DashboardLayout from "./pages/DashboardLayout";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addJobAction } from "./pages/AddJob";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { loader as editJobLoader } from "./pages/EditJob";
import { action as editJobAction } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";
import { action as profileAction } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const rt = createBrowserRouter([
  //rt in any variable

  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true, //this will show along with parent (if true is not there only homepagelayout(parent) is displayed)
        element: <Landing />,
      },

      {
        path: "/landing",
        element: <Landing />,
      },

      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },

      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },

      {
        path: "/dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },

          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },

          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },

          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },

          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },

          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },

          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },
        ],
      },

      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={rt} />;
};

export default App;
