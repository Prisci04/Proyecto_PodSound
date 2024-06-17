
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'


function RutasProtegidas() {

    const {loading, isAuthenticated} = useAuth()
    console.log(loading, isAuthenticated)

    //Si esta cargando muestra esto
    if(loading) return <h1>Cargandooooo</h1>
    //si no esta auth redireccionalo al login
    if(!isAuthenticated){
        return <Navigate to='/login' replace/>
    }


  return (
    <Outlet/>
  )
}

export default RutasProtegidas