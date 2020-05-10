import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import firebase from "../../config/firebase";
import "firebase/auth";

import Navbar from "../../components/Navbar";

import "./styles.css";

export default function RecoverPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function recoveryPassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((result) => {
        setMsg(
          "Enviamos um link para seu email contendo as instruções para definir uma nova senha!"
        );
      })
      .catch((err) => {
        setMsg("Por favor, verifique se o email informado está correto!");
      });
  }

  return (
    <>
      <Navbar />
      <div className="form-recovery d-flex justify-content-center align-items-center">
        <form className="text-center form-login mx-auto">
          <h3 className="mb-3 font-weight-bold text-white">Recuperar Senha</h3>
          <input
            type="email"
            className="form-control my-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="msg my-4 text-center">
            <span>{msg}</span>
          </div>
          <button
            type="button"
            className="btn btn-lg btn-block btn-submit"
            onClick={recoveryPassword}
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
