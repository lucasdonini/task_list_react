import React, { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Tarefa from "./Tarefa/Tarefa";

const App = () => {
  // Estados
  const [contador, setContador] = useState(0);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([
    { id: 0, desc: "Estudar React", editando: false, concluida: false },
    { id: 1, desc: "Praticar Exercícios", editando: false, concluida: false },
    { id: 2, desc: "Tomar Água", editando: false, concluida: false },
  ]);

  // Funções - Tarefas
  const removerTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter((t) => t.id !== id);
    setTarefas(tarefasAtualizadas);

    console.log(`Id da tarefa removida: ${id}`);
  };

  const registrarNovaTarefa = (novaTarefa) => {
    if (novaTarefa.trim() === "") {
      alert("Não é possível registrar tarefas sem descirção");
      return;
    }

    const tarefaRegistrada = {
      id: Date.now(),
      desc: novaTarefa,
      editando: false,
      concluida: false,
    };
    setTarefas([...tarefas, tarefaRegistrada]);

    console.log("Tarefa alterada: ");
    console.table(tarefaRegistrada);
  };

  const atualizarTareda = (tarefaAlterada) => {
    setTarefas(
      tarefas.map((t) => (t.id === tarefaAlterada.id ? tarefaAlterada : t))
    );

    console.log("Tarefa atualizada: ");
    console.table(tarefaAlterada);
  };

  // Retorno
  return (
    <>
      <Header titulo="Título passado por prop" />

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
              onUpdate={atualizarTareda}
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

export default App;
