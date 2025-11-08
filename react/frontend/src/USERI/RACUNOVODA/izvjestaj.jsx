import { useParams } from "react-router-dom";

function Izvjestaj() {
  const { klijentId, mjesec } = useParams();
  return (
    <div>
      <h1>Mjesečni izvještaj o poslovanju</h1>
      <p>Klijent ID: {klijentId}</p>
      <p>Mjesec: {mjesec}.</p>
      <p>Prihodi: </p>
      <p>Rashodi: </p>
      <p>PDV: </p>
      <p>Dobitak/gubitak: </p>
    </div>
  );
}

export default Izvjestaj;