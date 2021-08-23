import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Registration from "./components/registration/Registration";
import Login from "./components/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./action/user";
import Disc from "./components/disc/Disc";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          {!isAuth ? (
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Disc} />
              <Redirect to="/" />
            </Switch>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
