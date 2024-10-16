import { NavBar } from "../../components/NavBar";
import ash from "../../images/ash.png";

import "./LoginPage.css"
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  checkingAuthentication,
  startCreatingUser,
  startGoogleSignIn,
  startLogin,
} from "../../store/auth/thunks";
import { useMemo, useState } from "react";

const loginFormFields = {
  email: "",
  password: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  //const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");

  const isAuthenticating = useMemo(() => status === "checking", [status]); //para poder blockear el boton login cuando está auntenticando

  const dispatch = useDispatch(); //para poder traer la accion de los thunks

  const { email, password, onInputChange } = useForm(loginFormFields);
  const {
    registerName,
    registerPassword,
    registerPassword2,
    registerEmail,
    onInputChange: onRegisterChange,
  } = useForm(registerFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    dispatch(startLogin({ email, password }));
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== registerPassword2) {
      setRegisterErrorMessage("Las contraseñas no son iguales");
      return;
    }

    dispatch(
      startCreatingUser({ registerEmail, registerName, registerPassword })
    );
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <NavBar />

      <div className="container login-container ">
        <div className="row">
          <div className="col-md-6 login-form-1">
            <h3>Ingreso </h3>
            <form onSubmit={loginSubmit}>
              <div className="form-group mb-2">
                <input
                  disabled={isAuthenticating}
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <input
                  disabled={isAuthenticating}
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                  pattern=".{6,}"
                  title="Debe tener al menos 6 caracteres"
                  required
                />
              </div>
              {errorMessage && (
                <div className="alert alert-danger">
                  El usuario ya se encuentra registrado
                </div>
              )}
              <div className="form-group mb-2">
                <input type="submit" className="btnSubmit" value="Login" />
                <input
                  disabled={isAuthenticating}
                  type="button"
                  className="btnSubmit"
                  value="Login Google"
                  onClick={onGoogleSignIn}
                />
              </div>

              <img src={ash} alt="" width={300} height={200} />
            </form>
          </div>

          <div className="col-md-6 login-form-2">
            <h3>Registro</h3>
            <form onSubmit={registerSubmit}>
              <div className="form-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  value={registerName}
                  name="registerName"
                  onChange={onRegisterChange}
                  required
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  value={registerEmail}
                  name="registerEmail"
                  required
                  onChange={onRegisterChange}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={registerPassword}
                  name="registerPassword"
                  pattern=".{6,}"
                  title="Debe tener al menos 6 caracteres"
                  required
                  onChange={onRegisterChange}
                />
              </div>

              <div className="form-group mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repita la contraseña"
                  value={registerPassword2}
                  name="registerPassword2"
                  pattern=".{6,}"
                  title="Debe tener al menos 6 caracteres"
                  onChange={onRegisterChange}
                  required
                />
              </div>
              {registerErrorMessage && (
                <div className="alert alert-danger">{registerErrorMessage}</div>
              )}

              {errorMessage && (
                <div className="alert alert-danger">
                  El usuario ya se encuentra registrado
                </div>
              )}

              <div className="form-group mb-2">
                <input
                  type="submit"
                  className="btnSubmit"
                  value="Crear cuenta"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};
