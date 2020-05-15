import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import firebase from "../../config/firebase";

import "./styles.css";

export default function EventCard({
  id,
  img,
  titulo,
  descricao,
  visualizacoes,
}) {
  const [urlImagem, setUrlImagem] = useState("");

  useEffect(() => {
    firebase
      .storage()
      .ref(`images/${img}`)
      .getDownloadURL()
      .then((url) => setUrlImagem(url));
  });

  return (
    <div className="event-card col-md-3 mt-5 col-sm-12 pl-0 pr-0">
      <div className="card">
        <img
          className="card-img-top img-card img-fluid"
          src={urlImagem}
          alt="Imagem do evento"
        />
        <div className="card-body text-white">
          <h5>{titulo}</h5>
          <p className="card-text text-justify">{descricao}</p>
          <div className="row footer-card d-flex align-items-center">
            <div className="col-6">
              <Link
                to={`/evento-detalhes/${id}`}
                className="btn btn-sm btn-details text-white"
              >
                + detalhes
              </Link>
            </div>

            <div className="col-6 text-right">
              <span>
                <i className="fas fa-eye mr-2"></i>
                {visualizacoes}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
