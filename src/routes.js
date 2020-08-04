import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default Routes;
