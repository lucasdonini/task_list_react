import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../router";

const Navigator = ({ mostrarUrlAtual }) => {
  const url = useLocation().pathname
  const destinos = mostrarUrlAtual ? routes : routes.filter((d) => d.path !== url);

  return (
    <nav>
      <ul>
        {destinos.map((d) => (
          <li key={d.path}>
            <Link to={d.path}>{d.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
