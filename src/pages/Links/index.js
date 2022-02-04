import { useState, useEffect } from "react";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.css";
import { getLinksSave, deleteLink } from "../../services/storeLinks";
import LinkItem from "../../components/Linkitem";

export default function Links() {
  const [myLoadLink, setMyLoadLink] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyListLink, setEmptyListLink] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const loadLink = await getLinksSave("@neoLinkey");

      if (loadLink.length === 0) {
        setEmptyListLink(true);
      }

      setMyLoadLink(loadLink);
    }
    getLinks();
  }, []);

  function handleOpenLin(itemLink) {
    setData(itemLink);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const ultimosLinks = await deleteLink(myLoadLink, id);

    if (ultimosLinks.length === 0) {
      setEmptyListLink(true);
    }

    setMyLoadLink(ultimosLinks);
  }

  return (
    <div className="container-links">
      <div className="header-links">
        <Link className="arrow" to="/">
          <FiArrowLeft size={30} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      {emptyListLink && (
        <div className="links-item">
          <h2 className="empty-text">A lista de links está vazia...</h2>
        </div>
      )}

      {myLoadLink.map((itemLink) => (
        <div key={itemLink.id} className="links-item">
          <button className="links" onClick={() => handleOpenLin(itemLink)}>
            <FiLink size={18} color="#fff" />
            {itemLink.long_url}
          </button>
          <button
            className="link-delete"
            onClick={() => handleDelete(itemLink.id)}
          >
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}
