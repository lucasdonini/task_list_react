import MainView from "../views/MainView";
import EstatisticasView from "../views/EstatisticasView";

export const routes = [
  {
    title: "Página principal",
    path: "/",
    element: <MainView />,
  },
  {
    title: "Página de estatísticas",
    path: "/estatisticas",
    element: <EstatisticasView />,
  },
];
