import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router";

const Navigator = ({ urlAtual }) => {
  const destinos = routes.filter((d) => d.path !== urlAtual);

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
