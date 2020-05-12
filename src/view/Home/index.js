import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar";
import EventCard from "../../components/EventCard";

import "./styles.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <EventCard />
    </>
  );
}
