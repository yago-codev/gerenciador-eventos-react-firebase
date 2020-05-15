import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import firebase from "../../config/firebase";
import "firebase/auth";

import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgTipo, setMsgTipo] = useState("");

  const dispatch = useDispatch();

  async function logar() {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, senha);

      setMsgTipo("Sucesso!");

      setTimeout(() => {
        dispatch({
          type: "LOGIN",
          userEmail: email,
        });
      }, 1500);
    } catch (erro) {
      setMsgTipo("Erro!");
    }
  }

  return (
    <div className="login-content d-flex flex-column justify-content-center">
      <form className="form-signin w-40 mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Entrar
          </h1>
        </div>

        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          className="btn btn-lg btn-block btn-login"
          type="button"
          onClick={logar}
        >
          Entrar
        </button>

        <div className="msg-login text-white text-center my-5">
          {msgTipo === "Sucesso!" && (
            <span>
              <strong>WOW!</strong>
              &nbsp; Você está conectado! &#128526;
            </span>
          )}

          {msgTipo === "Erro!" && (
            <span>
              <strong>Ops!</strong>
              Verifique se a senha ou usuário estão corretos! &#128546;
            </span>
          )}
        </div>

        <div className="opcoes-login mt-5 text-center">
          <Link to="/recover-password" className="mx-2">
            Recuperar senha
          </Link>
          <span className="text-white">&#9733;</span>
          <Link to="/register" className="mx-2">
            Quero cadastrar
          </Link>
        </div>

        {useSelector((state) => state.userLogged) === 1 && (
          <Redirect to="/events" />
        )}
      </form>
    </div>
  );
}
