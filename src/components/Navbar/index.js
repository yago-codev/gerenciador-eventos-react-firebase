import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
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
          <ul className="navbar-nav ml-md-3">
            {useSelector((state) =>
              state.userLogged === 0 ? (
                <>
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
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link text-white" to="/create-event">
                      Criar Evento
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link text-white" to="/">
                      Meus Eventos
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="nav-link text-white"
                      to="/"
                      onClick={() => dispatch({ type: "LOGOUT" })}
                    >
                      Sair
                    </Link>
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
