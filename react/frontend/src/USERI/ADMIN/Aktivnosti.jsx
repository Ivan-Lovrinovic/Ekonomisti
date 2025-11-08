import { useState } from "react";
import "./Tablice.css";

export default function Aktivnosti() {
  const [sortKey, setSortKey] = useState(null);

  return (
    <div className="tablica-box">
      <h2>Pregled aktivnosti</h2>

      <div className="tablica-toolbar">
        <button className="tablica-btn">Sortiraj po datumu</button>
        <button className="tablica-btn">Sortiraj abecedno</button>
      </div>

      <table className="tablica-table">
        <thead>
          <tr>
            <th>Mail</th>
            <th>Uloga</th>
            <th>Datum/Vrijeme</th>
          </tr>
        </thead>
        <tbody>{/* namjerno prazno, treba se ispisati podaci iz BD */}</tbody>
      </table>
    </div>
  );
}
