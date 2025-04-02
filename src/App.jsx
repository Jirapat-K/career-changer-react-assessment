import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HomeUser from "./pages/HomeUser";
import HomeAdmin from "./pages/HomeAdmin";
import Owner from "./pages/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "user",
        element: <HomeUser />,
      },
      {
        path: "admin",
        element: <HomeAdmin />,
      },
      {
        path: "owner",
        element: <Owner />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
