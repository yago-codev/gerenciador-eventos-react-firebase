import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import firebase from "../../config/firebase";
import Navbar from "../../components/Navbar";

import "./styles.css";

export default function CreateEvent() {
  const [msgTipo, setMsgTipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState(null);
  const [hora, setHora] = useState(null);
  const [imagem, setImagem] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const storage = firebase.storage(); // storage de armazenamento das imagens de eventos
  const db = firebase.firestore(); // banco de dados onde serão armazenadas as infos dos eventos

  const usuario = useSelector((state) => state.userEmail);

  function criarEvento() {
    setMsgTipo(null);
    setCarregando(true);

    storage
      .ref(`images/${imagem.name}`)
      .put(imagem)
      .then(() => {
        db.collection("eventos")
          .add({
            titulo,
            tipo,
            descricao,
            data,
            hora,
            usuario: usuario,
            visualizacoes: 0,
            imagem: imagem.name,
            publico: 1,
            criacao: new Date(),
          })
          .then(() => {
            setMsgTipo("sucesso");
            setCarregando(false);
          })
          .catch((err) => {
            setMsgTipo("erro");
            setCarregando(false);
          });
      });
  }

  return (
    <>
      <Navbar />
      <div className="create-event col-12">
        <div className="row">
          <h3 className="mt-5 mb-5 mx-auto font-weight-bold text-white">
            Novo Evento
          </h3>
        </div>

        <form className="form-create-event col-8 mx-auto">
          <div className="form-group">
            <input
              type="text"
              className="form-control text-white"
              placeholder="Nome do Evento"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <select
              className="form-control"
              onChange={(e) => setTipo(e.target.value)}
            >
              <option disabled selected value>
                Selecione um tipo...
              </option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Evento</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              rows="7"
              placeholder="Descrição do evento..."
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <label className="text-white">Data:</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setData(e.target.value)}
                />
              </div>

              <div className="col-6">
                <label className="text-white">Hora:</label>
                <input
                  type="time"
                  className="form-control"
                  onChange={(e) => setHora(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setImagem(e.target.files[0])}
            />
          </div>

          {carregando === true ? (
            <div className="text-center">
              <div className="spinner-border text-white" role="status">
                <span className="sr-only">Carregando...</span>
              </div>
            </div>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-lg btn-block mt-3 mb-3 btn-cadastro"
                onClick={criarEvento}
              >
                Cadastrar
              </button>
            </>
          )}
        </form>

        <div className="msg-login text-white text-center mt-2">
          {msgTipo === "sucesso" && (
            <span>
              <strong>WOW!</strong>
              &nbsp; Evento publicado com sucesso! &#128526;
            </span>
          )}

          {msgTipo === "erro" && (
            <span>
              <strong>Ops!</strong>
              Não foi possível publicar o evento, por favor, tente novamente!
              &#128546;
            </span>
          )}
        </div>
      </div>
    </>
  );
}
