import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { routes } from "./router";
import { TarefasProvider } from "./contexts/TarefasContext";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TarefasProvider>
      <RouterProvider router={router} />
    </TarefasProvider>
  </StrictMode>
);
