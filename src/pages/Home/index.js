import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./index.css";
import Menu from "../../components/Menu";
import LinkItem from "../../components/Linkitem";
import api from "../../services";
import { saveLinks } from "../../services/storeLinks";

export default function Home() {
  const [strLink, setStrLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dataResponseBitly, setDataResponseBitly] = useState({});


  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: strLink,
      });

      setDataResponseBitly(response.data);
      setShowModal(true);
      saveLinks('@neoLinkey', response.data)
   
    } catch (error) {
      alert("deu erro");
      setStrLink("");
    }
    
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
      {showModal && <LinkItem closeModal={() => setShowModal(false)} 
      content={dataResponseBitly}
      />}

    </div>
  );
}
