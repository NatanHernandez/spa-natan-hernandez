import React, { useState, useRef, useEffect } from "react";
import Inicio from "./inicio";
import Autos from "./autos";
import Contact from "./contactos";

function App() {
  const [page, setPage] = useState("inicio");
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [page]);

  return (
    <div>
      <header>
        <h1>New Generation and Innovations cars</h1>
        <nav aria-label="Menú principal">
          <button onClick={() => setPage("inicio")}>Inicio</button>
          <button onClick={() => setPage("autos")}>Autos</button>
          <button onClick={() => setPage("contact")}>Contacto</button>
        </nav>
      </header>

      <main
        id="main-content"
        tabIndex="-1"
        ref={mainRef}
        role="main"
      >
        {page === "inicio" && <Inicio />}
        {page === "autos" && <Autos />}
        {page === "contact" && <Contact />}
      </main>

      <footer>
        <p>&copy; 2025 new generarion innovations cars</p>
      </footer>
    </div>
  );
}

export default App;