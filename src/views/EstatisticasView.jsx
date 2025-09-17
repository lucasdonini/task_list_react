import React, { useState, useEffect } from "react";
import Navigator from "../components/Navigator/Navigator";
import { useTarefas } from "../contexts/TarefasContext";

const EstatisticasView = () => {
  // Contexto
  const { tarefas } = useTarefas();

  // Estados
  const [total, setTotal] = useState(0);
  const [concluidas, setConcluidas] = useState(0);
  const [pendentes, setPendentes] = useState(0);

  useEffect(() => {
    setTotal(tarefas.length);
    setConcluidas(tarefas.map((t) => t.concluida).length);
    setPendentes(total - concluidas);
  }, [tarefas]);

  return (
    <>
      <header>
        <h1>Página de estatísticas</h1>
        <Navigator />
      </header>
      <main>
        <h2>Estatísticas</h2>
        <p>Total de tarefas: {total}</p>
        <p>Tarefas concluídas: {concluidas}</p>
        <p>Tarefas pendentes: {pendentes}</p>
      </main>
    </>
  );
};

export default EstatisticasView;
