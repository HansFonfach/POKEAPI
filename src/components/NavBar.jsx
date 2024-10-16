import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gengar from "../images/gengar.png";
import { startLogout } from "../store/auth/thunks";

export const NavBar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(startLogout());
  };

  const { displayName } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-light bg-primary">
      <img src={gengar} alt="" width={100} height={60} />
      <h5 className="txt-margin text-white">{displayName}</h5>
      <h1 className="mx-auto text-warning">Pokemon Api</h1>
      <button
        type="button"
        onClick={logout}
        className="btn btn-outline-light btn-margin"
      >
        Cerrar Sesion
      </button>
    </nav>
  );
};
