import React, { useState } from "react";

function App() {
  const API_URL = "https://8o9bjhrir5.execute-api.us-west-2.amazonaws.com";

  const [resultado, setResultado] = useState(null);

  const consultarUsuario = async () => {
    const res = await fetch(`${API_URL}/usuarios/123`);
    const data = await res.json();
    setResultado(data);
  };

  const consultarCurso = async () => {
    const res = await fetch(`${API_URL}/cursos/101`);
    const data = await res.json();
    setResultado(data);
  };

  const consultarInscripcion = async () => {
    const res = await fetch(`${API_URL}/inscripciones/1`);
    const data = await res.json();
    setResultado(data);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Aplicación de Inscripción de Cursos</h1>

      <p>Laboratorio 11 - Microservicios con AWS</p>

      <button onClick={consultarUsuario}>Consultar Usuario</button>
      <br /><br />

      <button onClick={consultarCurso}>Consultar Curso</button>
      <br /><br />

      <button onClick={consultarInscripcion}>Consultar Inscripción</button>

      <h2>Resultado:</h2>

      {resultado && (
        <pre style={{ background: "#f2f2f2", padding: "15px" }}>
          {JSON.stringify(resultado, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;