import { useForm } from "react-hook-form";
import { loginRequest, registerRequest } from "../api/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import Error from "./Error";
import { useSnackbar } from "notistack";
import { useState } from "react";

function FormRegistro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate("");

  const [user, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = {
    user,
    email,
    password,
  };

  const registrarUsuario = () => {
    registerRequest(data)
      .then((response) => {
        navigate("/");
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="form__content">
        <div className="form__content-contain">
          <h2 className="titulo-registro">Registro</h2>

          <form
            className="form"
            noValidate
            onSubmit={handleSubmit(registrarUsuario)}
          >
            <div className="contenido__input">
              <input
                className="input__item"
                type="text"
                placeholder="Escribe tu usuario"
                {...register("userName", {
                  required: "El nombre del usuario es obligatorio",
                })}
                onChange={(evt) => setUser(evt.target.value)}
              />
              {errors.userName && (
                <Error>{errors.userName?.message?.toString()}</Error>
              )}
            </div>

            <div className="contenido__input">
              <input
                className="input__item"
                type="email"
                placeholder="Escribe tu e-mail"
                {...register("email", {
                  required: "El Email es Obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email No Válido",
                  },
                })}
                onChange={(evt) => setEmail(evt.target.value)}
              />
              {errors.email && (
                <Error>{errors.email?.message?.toString()}</Error>
              )}
            </div>

            <div className="contenido__input">
              <input
                className="input__item"
                type="password"
                placeholder="Escribe tu contraseña"
                {...register("password", {
                  required: "El password es obligatorio",

                  minLength: {
                    value: 6,
                    message: "Minimo de 6 caracteres",
                  },
                })}
                onChange={(evt) => setPassword(evt.target.value)}
              />
              {errors.password && (
                <Error>{errors.password?.message?.toString()}</Error>
              )}
            </div>
            <div className="contenido__input">
              <input
                className="input__item"
                type="password"
                placeholder="Repite tu contraseña"
                {...register("confirm-password", { required: true })}
                onChange={(evt) => setConfirmPassword(evt.target.value)}
              />
            </div>

            <button className="button-verde button-registro" type="submit">
              Registrarse
            </button>
          </form>
          <Link to="/inicio-Sesion" className="inicio-sesion">
            INICIAR SESION
          </Link>
        </div>
      </div>
    </>
  );
}

export default FormRegistro;
