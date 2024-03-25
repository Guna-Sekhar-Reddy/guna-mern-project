import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Login, Register } from "./pages";
import DashboardLayout from "./pages/DashboardLayout";

const rt = createBrowserRouter([
  //rt in any variable

  {
    path: "/",
    element: <HomeLayout />,

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
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/DashboardLayout",
        element: <DashboardLayout />,
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
