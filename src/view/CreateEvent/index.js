import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import firebase from "../../config/firebase";
import Navbar from "../../components/Navbar";

import "./styles.css";

export default function CreateEvent() {
  const [msgTipo, setMsgTipo] = useState("");

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
              className="form-control"
              placeholder="Nome do Evento"
            />
          </div>

          <div className="form-group">
            <select className="form-control">
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
            <textarea className="form-control" rows="7" />
          </div>

          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <label className="text-white">Data:</label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-6">
                <label className="text-white">Hora:</label>
                <input type="time" className="form-control" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <input type="file" className="form-control" />
          </div>

          <button type="button" className="btn-cadastro btn btn-lg btn-block">
            Criar Evento
          </button>
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
