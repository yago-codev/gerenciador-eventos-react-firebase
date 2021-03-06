import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import Login from "./view/Login";
import Register from "./view/Register";
import Home from "./view/Home";
import RecoverPassword from "./view/RecoverPassword";
import CreateEvent from "./view/CreateEvent";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/events" component={Home} />
        <Route path="/events/:my_event" component={Home} />
        <Route exact path="/recover-password" component={RecoverPassword} />
        <Route exact path="/create-event" component={CreateEvent} />
      </Router>
    </Provider>
  );
}

export default App;
