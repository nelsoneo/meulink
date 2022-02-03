import "./index.css";
import { FiX, FiClipboard } from "react-icons/fi";

export default function LinkItem({ closeModal }) {
  return (
    <div className="container-modal">
      <div className="header-modal">
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>http://sujeitoprogramador.com</span>

      <button className="modal-link">
        http://bit.ly.com
        <FiClipboard size={20} color="#fff" />
      </button>
    </div>
  );
}
