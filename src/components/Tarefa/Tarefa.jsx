import React, { useState } from "react";
import "./Tarefa.css";

const Tarefa = ({ dados, onRemove, onUpdate }) => {
  const { id, desc, editando, concluida } = dados;

  // Estados
  const [texto, setTexto] = useState(desc);
  const [estaEditando, setEditando] = useState(editando);
  const [estaConcluida, setConcluida] = useState(concluida);

  const toggleEditando = () => {
    if (estaEditando) {
      onUpdate({ id, desc: texto, editando: false });
    }
    setEditando(!estaEditando);
  };

  return (
    <div
      className={`tarefa ${estaEditando ? "editando" : ""} ${
        estaConcluida ? "concluida" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={estaConcluida}
        disabled={estaEditando}
        onChange={(e) => {
          const status = e.target.checked;
          setConcluida(status);
          onUpdate({ id, concluida: status });
        }}
      />
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        disabled={!estaEditando}
      />
      <button onClick={toggleEditando} disabled={estaConcluida}>
        {estaEditando ? "Salvar" : "Editar"}
      </button>
      <button onClick={() => onRemove(id)} disabled={estaConcluida}>
        Remover
      </button>
    </div>
  );
};

export default Tarefa;
