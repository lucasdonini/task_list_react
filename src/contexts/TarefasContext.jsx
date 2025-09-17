import { createContext, useContext, useState } from "react";

const TarefasContext = createContext();

export const TarefasProvider = ({ children }) => {
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

  const atualizarTarefa = (tarefaAlterada) => {
    setTarefas(
      tarefas.map((t) => (t.id === tarefaAlterada.id ? tarefaAlterada : t))
    );

    console.log("Tarefa atualizada: ");
    console.table(tarefaAlterada);
  };

  return (
    <TarefasContext.Provider
      value={{ tarefas, registrarNovaTarefa, removerTarefa, atualizarTarefa }}
    >
      {children}
    </TarefasContext.Provider>
  );
};

export const useTarefas = () => useContext(TarefasContext);
