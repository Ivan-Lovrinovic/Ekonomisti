import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import { useRacunovoda } from "./RacunovodaContext";
import { useParams } from "react-router-dom";

function KlijentInfo() {

const navigate = useNavigate();
const { klijenti, slobodniKlijenti } = useRacunovoda();
const { klijentId } = useParams();
const klijent = klijenti.find(k => k.id === Number(klijentId));

if (klijenti.length === 0) return <p>Učitavanje klijenta...</p>;

if (!klijent) return <p>Klijent nije pronađen</p>;

return (
    <div>
        <h1>Klijent {klijent.ime}</h1>

        <h3>Klijent info</h3>
            <ul>
                <p>Nema dostupnih dokumenata za pregled</p>
            </ul>
    </div>
    )
}

export default KlijentInfo;