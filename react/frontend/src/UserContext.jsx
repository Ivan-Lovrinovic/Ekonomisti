import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tvrtke, setTvrtke] = useState([]);
  const [trenutnaTvrtka, setTrenutnaTvrtka] = useState(null);
  const [klijenti, setKlijenti] = useState([]);
  const [slobodniKlijenti, setSlobodniKlijenti] = useState([]);
  const oznaciOdradjen = (id) => {
  setKlijenti((prev) =>
    prev.map((k) =>
      k.id === id
        ? { ...k, status: k.status === "Odrađen" ? "Neodrađen" : "Odrađen" }
        : k
    )
  );
};

  // MOCK PODACI
  useEffect(() => {
    if (!user) setUser({ name: "Luka", email: "luka@test.com" });
    if (!tvrtke || tvrtke.length === 0) setTvrtke(["Tvrtka A", "Tvrtka B", "Tvrtka C"]);
    if (klijenti.length === 0)
      setKlijenti([
        { id: 1, ime: "Klijent A", status: "Neodrađen" },
        { id: 2, ime: "Klijent B", status: "Odrađen" },
        { id: 3, ime: "Klijent C", status: "Neodrađen" },
  ]);
  }, []);


    useEffect(() => {
    fetch("http://localhost:9090/api/user", {
      method: "GET",
      credentials: "include", 
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    if (tvrtke.length === 1 && !trenutnaTvrtka) {
      setTrenutnaTvrtka(tvrtke[0]);
    }
  }, [tvrtke, trenutnaTvrtka]);




   useEffect(() => {
    // Ovdje pozvati API za dohvat svih tvrtki
  });


  useEffect(() => {
      // Ovdje pozvati API za dohvat svih ostalih putnih naloga korisnika
   });

  return (
    <UserContext.Provider
      value={{ user, setUser, tvrtke, setTvrtke, trenutnaTvrtka, setTrenutnaTvrtka, klijenti, setKlijenti, slobodniKlijenti, setSlobodniKlijenti, oznaciOdradjen}}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
