import React, { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas para mostrar errores accesibles
    const nuevosErrores = {};
    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!correo.trim()) nuevosErrores.correo = "El correo es obligatorio";
    if (!mensaje.trim()) nuevosErrores.mensaje = "El mensaje es obligatorio";

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      // aquí enviarías el formulario
      alert("Formulario enviado correctamente");
      setNombre("");
      setCorreo("");
      setMensaje("");
    }
  };

  return (
    <section
      aria-labelledby="contacto-title"
      style={{ padding: "1rem", maxWidth: "700px", margin: "0 auto" }}
    >
      <h2 id="contacto-title">Contacto</h2>
      <p>Complete el siguiente formulario para comunicarse con nosotros:</p>

      <form onSubmit={handleSubmit} aria-describedby="form-desc">
        <div id="form-desc" className="sr-only">
          Todos los campos son obligatorios.
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            aria-required="true"
            aria-invalid={!!errores.nombre}
            aria-describedby={errores.nombre ? "error-nombre" : undefined}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errores.nombre && (
            <span
              id="error-nombre"
              role="alert"
              style={{ color: "red", fontSize: "0.9rem" }}
            >
              {errores.nombre}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            aria-required="true"
            aria-invalid={!!errores.correo}
            aria-describedby={errores.correo ? "error-correo" : undefined}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errores.correo && (
            <span
              id="error-correo"
              role="alert"
              style={{ color: "red", fontSize: "0.9rem" }}
            >
              {errores.correo}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            aria-required="true"
            aria-invalid={!!errores.mensaje}
            aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
            style={{ width: "100%", padding: "0.5rem" }}
          ></textarea>
          {errores.mensaje && (
            <span
              id="error-mensaje"
              role="alert"
              style={{ color: "red", fontSize: "0.9rem" }}
            >
              {errores.mensaje}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </section>
  );
}