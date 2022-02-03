import "./index.css";
import { Link } from "react-router-dom";

export default function ErroPage() {
  return (
    <div className="container-erro">
      <img src="notfound.png" alt="Erro page not found" />
      <p>Página não encontrada!</p>
      <Link to="/">Voltar para home</Link>
    </div>
  );
}
