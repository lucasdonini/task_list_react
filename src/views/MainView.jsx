import React, { useState, createContext, useContext } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Tarefa from "../components/Tarefa/Tarefa";
import Navigator from "../components/Navigator/Navigator";
import { useTarefas } from "../contexts/TarefasContext";

const MainView = () => {
  // Estados
  const [contador, setContador] = useState(0);
  const [novaTarefa, setNovaTarefa] = useState("");

  // Contextos
  const { tarefas, registrarNovaTarefa, removerTarefa, atualizarTarefa } =
    useTarefas();

  // Retorno
  return (
    <>
      <header>
        <Header titulo="Gerenciador de Tarefas" />
        <Navigator urlAtual="/" />
      </header>

      <h1>Olá React</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador - 1)}>-1</button>
      <button onClick={() => setContador(contador + 1)}>+1</button>

      <h2>Tarefas:</h2>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <Tarefa
              dados={t}
              onRemove={removerTarefa}
              onUpdate={atualizarTarefa}
            />
          </li>
        ))}
      </ul>

      <h2>Registro de tarefas</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registrarNovaTarefa(novaTarefa);
          setNovaTarefa("");
        }}
      >
        <label htmlFor="nova_tarefa">Descrição:</label>
        <input
          type="text"
          name="nova_tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>

      <Footer texto="Texto passado por prop" />
    </>
  );
};

export default MainView;
