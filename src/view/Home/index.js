import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import EventCard from "../../components/EventCard";
import firebase from "../../config/firebase";

import "./styles.css";

export default function Home({ match }) {
  const [eventos, setEventos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  let listaEventos = [];
  const usuarioEmail = useSelector((state) => state.userEmail);

  function buscarEventos() {
    if (match.params.my_event) {
      firebase
        .firestore()
        .collection("eventos")
        .where("usuario", "==", usuarioEmail)
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
    } else {
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
  }

  useEffect(() => {
    buscarEventos();
  }, [buscarEventos]);

  return (
    <>
      <Navbar />
      <div className="home pb-5">
        <div className="container">
          <div className="row">
            <h2 className="w-100 text-center mb-0 pb-0 text-white mt-5">
              Eventos
            </h2>
          </div>
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
