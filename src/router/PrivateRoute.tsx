import { Navigate } from "react-router-dom";
import { route } from "../constants/routes";
import { useAppSelector } from "../redux/store";

type PrivateRouteProps = {
  element: () => JSX.Element;
};

const PrivateRoute = (props: PrivateRouteProps) => {
  const { user } = useAppSelector((state) => state.root.user);

  const { element: Component, ...rest } = props;
  const isLoggedIn = !!user.token;
  return isLoggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate to={route.signIn.path} />
  );
};

export default PrivateRoute;
