import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import firebase from "../../config/firebase";
import "firebase/auth";

import "./styles.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msgTipo, setMsgTipo] = useState("");
  const [msg, setMsg] = useState("");
  const [carregando, setCarregando] = useState(null);
  const [redirect, setRedirect] = useState(false);

  function register() {
    setMsgTipo(null);
    setCarregando(true);
    setRedirect(true);

    if (!email || !senha) {
      setMsgTipo("erro");
      setMsg("Você precisa informar o email e senha para fazer o cadastro!");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((resultado) => {
        setMsgTipo("sucesso");
        setCarregando(false);
      })
      .catch((erro) => {
        setCarregando(false);
        setMsgTipo("erro");
        setRedirect(false);
        switch (erro.message) {
          case "Password should be at least 6 characters":
            setMsg("A senha deve ter pelo menos 6 caracteres!");
            break;
          case "The email address is already in use by another account.":
            setMsg(
              "O email informado já está sendo utilizado por outro usuário"
            );
            break;
          case "The email address is badly formatted.":
            setMsg(
              "O formato do email informado é inválido, por favor, tente novamente!"
            );
            break;
          default:
            setMsg(
              "Não foi possível cadastrar seu usuário. Tente novamente mais tarde!"
            );
        }
      });
  }

  return (
    <div className="form-cadastro d-flex flex-column align-items-center justify-content-center w-100">
      <form className="form-register">
        <h1 className="h3 mb-3 text-center text-white font-weight-bold">
          Cadastro
        </h1>
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Password"
          onChange={(e) => setSenha(e.target.value)}
        />

        {carregando === true ? (
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Carregando...</span>
          </div>
        ) : (
          <>
            <button
              type="button"
              className="btn btn-lg btn-block mt-3 mb-3 btn-cadastro"
              onClick={register}
            >
              Cadastrar
            </button>
          </>
        )}

        {msgTipo === "sucesso" && (
          <span>
            <strong>WOW!</strong>
            &nbsp; Usuário cadastrado com sucesso! &#128526;
          </span>
        )}

        {msgTipo === "erro" && (
          <span>
            <strong>Ops!</strong>
            &nbsp; {msg} &#128546;
          </span>
        )}

        {redirect === true && <Redirect to="/" />}
      </form>
    </div>
  );
}
