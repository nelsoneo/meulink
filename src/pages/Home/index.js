import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./index.css";
import Menu from "../../components/Menu";
import LinkItem from "../../components/Linkitem";

export default function Home() {
  const [strLink, setStrLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleShortLink() {
    setShowModal(true);
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="logo.png" alt="Suject link logo" />
        <h1>Sujeito Link</h1>
        <span>cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={strLink}
            onChange={(e) => setStrLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Gerar Link</button>
      </div>

      <Menu />
     { showModal && ( <LinkItem closeModal = {() => setShowModal(false)}/>)}
    </div>
  );
}
