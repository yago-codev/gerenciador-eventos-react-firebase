import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import EventCard from "../../components/EventCard";
import firebase from "../../config/firebase";

import "./styles.css";

export default function Home() {
  const [eventos, setEventos] = useState([]);

  let listaEventos = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection("eventos")
      .get()
      .then(async (result) => {
        await result.docs.map((doc) => {
          return listaEventos.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setEventos(listaEventos);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="container">
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
