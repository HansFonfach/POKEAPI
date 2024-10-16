// thunks = acciones que puedo despachar las cuales internamente tienen una tarea asincrona (para eso es)

import {
  loginUser,
  logoutFirebase,
  registerUser,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials()); //proviene de authSlice
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

    //Esto es si sale mal
    if (!result.ok) return dispatch(logout(result.errorMessage)); //el result.errorMessage es para mostrar el mensaje de error

    //Esto es si sale bien
    dispatch(login(result));
  };
};

export const startCreatingUser = ({
  registerName: displayName,
  registerPassword: password,
  registerEmail: email,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } = await registerUser({
      password,
      email,
      displayName,
    });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginUser({ password, email });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
