import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Contato from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Route path="/" component={Home} exact /> */}
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contato} />
      <Route path="/forgotPassword" component={ForgotPassword} />
    </BrowserRouter>
  );
}

export default Routes;
