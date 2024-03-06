import SignIn from "../components/features/SignIn/SignIn";
import SignUp from "../components/features/SignUp";
import Dashboard from "../components/features/Dashboard";
import AboutUs from "../components/features/AboutUs";
import Error from "../components/features/Error";

type Route = {
  [key: string]: {
    path: string;
    component: () => JSX.Element;
  };
};

export const route: Route = {
  signIn: {
    path: "/sign-in",
    component: SignIn,
  },
  signUp: {
    path: "/sign-up",
    component: SignUp,
  },
  dashboard: {
    path: "/dashboard",
    component: Dashboard,
  },
  aboutUs: {
    path: "/about-us",
    component: AboutUs,
  },
  error: {
    path: "/error",
    component: Error,
  },
};

const routesData = {
  defaultRoutes: [route.dashboard, route.aboutUs],
  authRoutes: [route.signIn, route.signUp],
};
export default routesData;
