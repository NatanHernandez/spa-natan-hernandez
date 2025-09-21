import React from "react";

const autos = [
  { 
    id: 1, 
    title: "Toyota Corolla XLI HEV 2026", 
    desc: "Sedán híbrido — Motor 1.8L híbrido, transmisión automática.", 
    price: "COP 95.000.000", 
    img: "/img/auto1.jpg", 
    alt: "Toyota Corolla XLI HEV 2026 sedán híbrido" 
  },
  { 
    id: 2, 
    title: "Hyundai Santa Fe 2024", 
    desc: "SUV azul — Motor 2.5L turbo, 7 plazas.", 
    price: "COP 160.000.000", 
    img: "/img/auto2.jpg", 
    alt: "Hyundai Santa Fe 2024 SUV azul" 
  },
  { 
    id: 3, 
    title: "Chevrolet Spark 2021", 
    desc: "Hatchback blanco — Motor 1.2L, ideal ciudad.", 
    price: "COP 28.000.000", 
    img: "/img/auto3.jpg", 
    alt: "Chevrolet Spark 2021 hatchback blanco" 
  },
  { 
    id: 4, 
    title: "Mazda RX-8 2011", 
    desc: "Coupé deportivo — Motor rotativo 1.3L, 231 HP.", 
    price: "COP 140.000.000", 
    img: "/img/auto4.jpg", 
    alt: "Mazda RX-8 2011 coupé deportivo" 
  },
  { 
    id: 5, 
    title: "Nissan Versa 2023", 
    desc: "Sedán plata — Motor 1.6L, económico.", 
    price: "COP 52.000.000", 
    img: "/img/auto5.jpg", 
    alt: "Nissan Versa 2023 sedán plata" 
  },
  { 
    id: 6, 
    title: "Ford F-150 Raptor 2023", 
    desc: "Pickup azul — Motor 3.5L V6 EcoBoost, doble cabina.", 
    price: "COP 290.000.000", 
    img: "/img/auto6.jpg", 
    alt: "Ford F-150 Raptor 2023 pickup azul" 
  },
  { 
    id: 7, 
    title: "Kia Picanto 2020", 
    desc: "Compacto rojo — Motor 1.0L, muy económico.", 
    price: "COP 25.000.000", 
    img: "/img/auto7.jpg", 
    alt: "Kia Picanto 2020 compacto rojo" 
  },
  { 
    id: 8, 
    title: "BMW M3 2023", 
    desc: "Sedán deportivo — Motor 3.0L Twin Turbo 480 HP.", 
    price: "COP 450.000.000", 
    img: "/img/auto8.jpg", 
    alt: "BMW M3 2023 sedán deportivo" 
  },
  { 
    id: 9, 
    title: "Toyota Prius 2020", 
    desc: "Híbrido blanco — Excelente consumo urbano.", 
    price: "COP 95.000.000", 
    img: "/img/auto9.jpg", 
    alt: "Toyota Prius 2020 híbrido blanco" 
  },
  { 
    id: 10, 
    title: "Mini Cooper 2022", 
    desc: "Convertible azul — Estilo urbano y diversión.", 
    price: "COP 140.000.000", 
    img: "/img/auto10.jpg", 
    alt: "Mini Cooper 2022 convertible azul" 
  }
];

export default function Autos() {
  return (
    <section aria-labelledby="autos-title">
      <h2 id="autos-title">Autos Disponibles</h2>
      <p>Aquí podrás ver todos los autos que tenemos en el concesionario:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {autos.map(a => (
          <li
            key={a.id}
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              alignItems: "center",
              background: "#f0f8ff",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ddd"
            }}
          >
            <img
              src={a.img}
              alt={a.alt}
              width="180"
              style={{ borderRadius: 6, border: "2px solid #ddd" }}
            />
            <div>
              <h3 style={{ margin: 0 }}>{a.title}</h3>
              <p style={{ margin: "6px 0" }}>{a.desc}</p>
              <p style={{ margin: 0, fontWeight: "bold" }}>{a.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}