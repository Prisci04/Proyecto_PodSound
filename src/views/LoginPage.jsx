import { Link ,useNavigate } from 'react-router-dom';
import {set, useForm} from 'react-hook-form';
import Error from '../components/Error';
import {loginRequest} from '../api/auth';
import { useState } from 'react';
function LoginPage() {

    const { register,handleSubmit,formState:{errors} } = useForm();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate('')

    const handleSend =evt=>{
        evt.preventDefault();
        loginRequest({email,password}).then((response)=>{
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }

    return(
        <>
         <div className="contain__inicio-sesion"> 
        
        <section className="section__form-inicio">
            <div className="section__form-contain">
                <h2 className="titulo-inicio">Inicio sesion</h2>
                <form action="" 
                noValidate 
                className="form__inicio-sesion"
                onSubmit={handleSubmit(handleSend)}
                >            
                
                    <div className="contenido__input-inicio">
                        <input 
                        className="input__item-inicio" 
                        type="text" 
                        placeholder="Ingrese su usuario"
                        {...register('userName',{
                            required:'El Campo del usuario es obligatorio'
                            })
                        } 
                        onChange={evt=>setEmail(e.target.value)}
                        />
                        {errors.userName &&(
                        
                            <Error >{errors.userName?.message?.toString()}</Error>
                        )}
                    </div>
                
                    <div className="contenido__input-inicio">
                        <input 
                        className="input__item-inicio" 
                        type="password" 
                        placeholder="Ingrese su contraseña" 
                        {...register('password',{
                            required:'El Campo del contraseña es obligatorio',
                            minLength:{
                                value:6,
                                message:'Minimo de 6 caracteres'
                            }
                            })
                        }
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        {errors.password &&(
                        
                            <Error >{errors.password?.message?.toString()}</Error>
                        )}


                    </div>

                    <div 
                    className="contain__texto-recuperar-pass">
                        <Link 
                        to="/recuperar-contraseña" 
                        className="texto-recuperar-pass"
                        >
                            ¿Has olvidado tu contraseña?
                        </Link>
                    </div>
                
                    <button 
                    className="button-verde button-verde--margin"
                    type="submit"
                    >
                        Iniciar sesion
                    </button>

                    <div className="texto">
                        <Link 
                        to='/'
                        className="link__regreso" 
                        >
                            Volver
                        </Link>
                    </div>
                </form>
                
            
            </div>
            
        </section>
        </div>
        
        </>
    );
};




export default LoginPage;