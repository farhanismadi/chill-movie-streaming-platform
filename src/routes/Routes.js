import { useRoutes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Homepage } from "../pages/Homepage";
import { MyList } from "../pages/MyList";
import { Series } from "../pages/Series";
import { Film } from "../pages/Film";
import { Profile } from "../pages/Profile";
import { Subscription } from "../pages/Subscription";
import { Payment } from "../pages/Payment";
import { NotFound } from "../pages/NotFound";

const router = () => [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/my-list",
        element: <MyList />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/film",
        element: <Film />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const Routes = (props) => {
  const routers = router(props);
  let routes = useRoutes(routers);
  return routes;
};
