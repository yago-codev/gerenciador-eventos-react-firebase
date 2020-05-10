import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";

import "./styles.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>{useSelector((state) => state.userEmail)}</h1>
      <h1>{useSelector((state) => state.userLogged)}</h1>
    </>
  );
}
