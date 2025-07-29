import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [unfollowers, setUnfollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Instaspy – Unfollowers Tracker";
  }, []);

  const handleCheck = async () => {
    setLoading(true);
    setError("");

    try {
      // Simulazione: dovresti sostituirla con una vera chiamata API in futuro
      await new Promise((res) => setTimeout(res, 2000));
      setUnfollowers(["@username1", "@username2", "@username3"]);
    } catch (err) {
      setError("Errore nel recupero dei dati.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>📸 Instaspy</h1>
      <p>Controlla chi smette di seguirti su Instagram</p>
      <button onClick={handleCheck} disabled={loading}>
        {loading ? "Controllo in corso..." : "Controlla Unfollowers"}
      </button>

      {error && <p className="error">{error}</p>}

      <ul>
        {unfollowers.map((user, index) => (
          <li key={index}>❌ {user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;