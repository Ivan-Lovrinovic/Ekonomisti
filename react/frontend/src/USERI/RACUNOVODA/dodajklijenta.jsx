import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

function Dodajklijenta() {

const navigate = useNavigate();
const { slobodniKlijenti } = useUser();

return (
    <div>
        <h1>Dodaj klijenta</h1>

        <h3>Lista slobodnih klijenata</h3>
            <ul>
                {slobodniKlijenti.length > 0 ? (
                slobodniKlijenti.map((k) => <li key={k.id}>{k.ime}</li>)
                ) : (
                <p>Nemate klijenata.</p>
                )}
            </ul>
    </div>
    )
}

export default Dodajklijenta;