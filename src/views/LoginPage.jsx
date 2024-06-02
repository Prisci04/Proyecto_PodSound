import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Error from '../components/Error';

function LoginPage() {

    const { register,handleSubmit,formState:{errors} } = useForm();
    
    return(
        <>
         <div className="contain__inicio-sesion"> 
        
        <section className="section__form-inicio">
            <div className="section__form-contain">
                <h2 className="titulo-inicio">Inicio sesion</h2>
                <form action="" 
                noValidate 
                className="form__inicio-sesion"
                onSubmit={handleSubmit((e)=>{e.preventDefault()})}
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