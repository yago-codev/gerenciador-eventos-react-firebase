import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function EventCard() {
  return (
    <div className="event-card pt-5">
      <div className="container">
        <div className="card col-md-3 col-sm-12 pl-0 pr-0">
          <img
            className="card-img-top img-card img-fluid"
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt="Imagem do evento"
          />
          <div className="card-body text-white">
            <h5>Título do Evento</h5>
            <p className="card-text text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ipsum lacus, finibus id commodo ut, feugiat sed velit. Donec odio
              felis, porta id molestie ac, porttitor ac tellus. Suspendisse
              varius nunc enim, eu congue nisi rhoncus vitae.
            </p>
            <div className="row footer-card d-flex align-items-center">
              <div className="col-6">
                <Link to="/" className="btn btn-sm btn-details text-white">
                  + detalhes
                </Link>
              </div>

              <div className="col-6 text-right">
                <span>
                  <i className="fas fa-eye"></i>2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
