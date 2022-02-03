import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.css";

export default function Links() {
  return (
    <div className="container-links">
      <div className="header-links">
        <Link className="arrow" to="/">
          <FiArrowLeft size={30} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className="links-item">
        <button className="links">
          <FiLink size={18} color="#fff" />
          http://sujeitoprogramador.com
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>

      <div className="links-item">
        <button className="links">
          <FiLink size={18}  color="#fff" />
          http://youtube.com
        </button>
        <button className="link-delete">
          <FiTrash size={24} color="#FF5454" />
        </button>
      </div>
    </div>
  );
}
