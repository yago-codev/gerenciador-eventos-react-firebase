import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import EventCard from "../../components/EventCard";
import firebase from "../../config/firebase";

import "./styles.css";

export default function Home() {
  const [eventos, setEventos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  let listaEventos = [];

  function buscarEventos() {
    firebase
      .firestore()
      .collection("eventos")
      .get()
      .then(async (result) => {
        await result.docs.forEach((doc) => {
          if (doc.data().titulo.indexOf(pesquisa) >= 0) {
            listaEventos.push({
              id: doc.id,
              ...doc.data(),
            });
          }
        });

        setEventos(listaEventos);
      });
  }

  useEffect(() => {
    buscarEventos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex pl-0 mt-5 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar eventos..."
                onChange={(e) => setPesquisa(e.target.value)}
              />
              <button
                className="btn-search btn"
                type="button"
                onClick={buscarEventos}
              >
                Pesquisar
              </button>
            </div>
          </div>
          <div className="row">
            {eventos.map((evento) => (
              <EventCard
                key={evento.id}
                id={evento.id}
                img={evento.imagem}
                titulo={evento.titulo}
                descricao={evento.descricao}
                visualizacoes={evento.visualizacoes}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
