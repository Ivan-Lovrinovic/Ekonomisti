import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import { useRacunovoda } from "./RacunovodaContext";

function Dodajklijenta() {

const navigate = useNavigate();
const { slobodniKlijenti } = useRacunovoda();

return (
    <div>
        <h1>Dodaj klijenta</h1>

        <h3>Lista slobodnih klijenata</h3>
            <ul>
                {slobodniKlijenti.length > 0 ? (
                slobodniKlijenti.map((k) => <li key={k.id}>{k.ime}</li>)
                ) : (
                <p>Nema slobodnih klijenata.</p>
                )}
            </ul>
    </div>
    )
}

export default Dodajklijenta;