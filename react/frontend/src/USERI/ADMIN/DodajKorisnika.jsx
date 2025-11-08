import { useState } from "react";
import { Link } from "react-router-dom";
import "./dodajKorisnika.css";

const ROLES = ["ADMIN", "RACUNOVODA", "KLIJENT", "RADNIK"];

export default function DodajKorisnika() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("RACUNOVODA");

  return (
    <div className="dodaj-box">
      <h2>Dodaj korisnika</h2>

      <div className="dodaj-form">
        <label className="uloge">
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </label>

        <label className="uloge">
          <span>Uloga</span>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>

        <button className="btn" type="button">
          Spremi
        </button>
      </div>

      <div className="back">
        <Link to="/test">Natrag</Link>
      </div>
    </div>
  );
}
