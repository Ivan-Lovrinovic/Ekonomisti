import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tvrtke, setTvrtke] = useState([]);
  const [trenutnaTvrtka, setTrenutnaTvrtka] = useState(null);

  // MOCK PODACI
  useEffect(() => {
    if (!user) setUser({ name: "Luka", email: "luka@test.com" });
    if (!tvrtke || tvrtke.length === 0) setTvrtke(["Tvrtka A", "Tvrtka B", "Tvrtka C"]);
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
      value={{ user, setUser, tvrtke, setTvrtke, trenutnaTvrtka, setTrenutnaTvrtka }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
