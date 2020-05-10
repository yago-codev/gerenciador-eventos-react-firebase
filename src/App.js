import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./view/Login";
import Register from "./view/Register";
import Home from "./view/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
