import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Contato from "./pages/Contato";
import ForgotPassword from "./pages/ForgotPassword";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contato} />
      <Route path="/forgotPassword" component={ForgotPassword} />
    </BrowserRouter>
  );
}

export default Routes;
