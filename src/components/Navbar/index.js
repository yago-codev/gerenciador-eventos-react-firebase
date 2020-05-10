import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/home" className="navbar-brand font-weight-bold">
        Eventos
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-md-5">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/home">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-link text-white" to="/register">
              Criar Conta
            </Link>
          </li>

          <li>
            <Link className="nav-link text-white" to="/">
              Entrar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
