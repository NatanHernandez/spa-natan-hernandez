import React, { useEffect, useRef } from "react";

export default function Inicio() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.focus();
    }
  }, []);

  return (
    <section
      aria-labelledby="inicio-title"
      tabIndex="-1"
      ref={sectionRef}
      style={{ textAlign: "center", padding: "1rem" }}
    >

      <h2 id="inicio-title">Bienvenido a nuestro concesionario</h2>

      <img
        src="/img/concesionario.jpg" 
        alt="Vista exterior del concesionario de autos"
        style={{
          width: "80%",          
          maxWidth: "700px",
          margin: "1rem auto",
          display: "block",
          borderRadius: "8px"
        }}
      />

      <p style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>
        Aquí conocerá distintos tipos de vehículos, marcas, colores y más
        detalles de nuestros autos que tendremos disponibles en el momento en
        nuestro concesionario. Use los botones de navegación para explorar las
        secciones y saber cuál es su auto ideal.
      </p>
    </section>
  );
}