import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Links from  "./pages/Links";
import ErroPage from "./pages/ErroPage";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<ErroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;