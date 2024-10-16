import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { CheckingAuth } from "../components/CheckingAuth";
import { PokeIndex } from "../pokemons/pages/PokeIndex";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {

  //Para mantener el estado de la autenticacion     
  const  status  = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PokeIndex />} />
      ) : (
        <Route path="login" element={<LoginPage />} />
      )}

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
