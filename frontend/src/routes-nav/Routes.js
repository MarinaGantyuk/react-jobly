import {
  Routes as Switch,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";
import React, { useContext } from "react";
import UserContext from "../auth/UserContext";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Routes({ login, signup }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`
  );
  // if (!currentUser) {
  //   navigate("/login");
  // }

  return (
    <div className="pt-5">
      <Switch>
        <Route
          element={
            <PrivateRoute>
              <CompanyList />
            </PrivateRoute>
          }
          path="/companies"
        />
        <Route element={<LoginForm login={login} />} path="/login" />

        <Route element={<Homepage />} path="/" />

        <Route element={<SignupForm signup={signup} />} path="/signup" />

        <Route
          element={
            <PrivateRoute>
              <JobList />
            </PrivateRoute>
          }
          path="/jobs"
        />

        <Route
          element={
            <PrivateRoute>
              <CompanyDetail />
            </PrivateRoute>
          }
          path="/companies/:handle"
        />

        <Route
          element={
            <PrivateRoute>
              <ProfileForm />
            </PrivateRoute>
          }
          path="/profile"
        />
      </Switch>
    </div>
  );
}

export default Routes;
