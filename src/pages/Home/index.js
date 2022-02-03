import { FiLink } from "react-icons/fi";
import "./index.css";
import Menu from "../../components/Menu";

export default function Home(){
    return (
      <div className="container-home">
        
        <div className="logo">
          <img src="logo.png" alt="Suject link logo" />
          <h1>Sujeito Link</h1>
          <span>cole seu link para encurtar</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff"/>
            <input type="text" placeholder="Cole seu link aqui..." />
          </div>
         
          <button>Gerar Link</button>
        </div>

        <Menu />
      </div>
    )
  }