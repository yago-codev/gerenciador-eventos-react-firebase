import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import Login from "./view/Login";
import Register from "./view/Register";
import Home from "./view/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
