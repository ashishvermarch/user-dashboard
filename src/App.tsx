import React from "react";
import "./App.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, DefaultLayout } from "./layout";
import PrivateRoute from "./router/PrivateRoute";
import routesData from "./constants/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import Error from "./components/features/Error";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: routesData.authRoutes.map(({ path, component: Component }) => {
      return {
        path: path,
        element: <Component />,
      };
    }),
  },

  {
    element: <DefaultLayout />,
    children: routesData.defaultRoutes.map(({ path, component }) => {
      return {
        path: path,
        element: <PrivateRoute element={component} />,
      };
    }),
  },

  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    element: <Error />,
    path: "/*",
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
