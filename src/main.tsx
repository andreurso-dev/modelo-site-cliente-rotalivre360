import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Não foi possível iniciar o site: elemento raiz ausente.");
}

createRoot(rootElement).render(<App />);
