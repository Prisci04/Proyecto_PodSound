import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSnackbar } from "notistack";

import { useAuth } from "../context/AuthContext";

function FormRegistro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/busqueda");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div className="form__content">
        {registerError.map((error, i) => (
          <div className="error-register" key={i}>
            {error}
          </div>
        ))}

        <div className="form__content-contain">
          <h2 className="titulo-registro">Registro</h2>

          <form className="form" onSubmit={onSubmit}>
            <div className="contenido__input">
              <input
                className="input__item"
                type="text"
                placeholder="Escribe tu usuario"
                {...register("username", { required: true })}
              />
              {/* esto se peude cambiar */}
              {errors.username && (
                <p className="texto-error">Username es requerido</p>
              )}
            </div>

            <div className="contenido__input">
              <input
                className="input__item"
                type="email"
                placeholder="Escribe tu e-mail"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="texto-error">Email es requerido</p>
              )}
            </div>

            <div className="contenido__input">
              <input
                className="input__item"
                type="password"
                placeholder="Escribe tu contraseña"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="texto-error">password es requerido</p>
              )}

            </div>


            <div className="contenido__input">
              <input
                className="input__item"
                type="password"
                placeholder="Repite tu contraseña"
                {...register("confirmPassword", { required: true })}
                
              />
            </div>

            <button className="button-verde button-registro" type="submit">
              Registrarse
            </button>
          </form>
          <Link to="/login" className="inicio-sesion">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </>
  );
}

export default FormRegistro;
