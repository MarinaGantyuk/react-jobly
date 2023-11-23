import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

function PrivateRoute({ path, element }) {
  const { currentUser } = useContext(UserContext);
  let navigate = useNavigate();
  // if (!currentUser) {
  //   navigate("/loading");
  // }

  return <Route element={element} path={path} />;
}

export default PrivateRoute;
