import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import PaginaInicio from "./views/PaginaInicio"; //DENTRO ESTA EL REGISTRO
import Busqueda from "./views/Busqueda"
import CrearPodcast from './views/CrearPodcast';



import { AuthProvider } from "./context/AuthContext";
import RutasProtegidas from "./RutasProtegidas";
import ForgotPassPage from "./views/ForgotPassPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuPage from "./views/MenuPage";
import ProfilePage from "./views/ProfilePage";
import NotFound from "./views/NotFound";
import PlanesProximo from "./views/PlanesProximo";

function App() {
  // AQUI VAN LAS FUNCIONES

  return (

    <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<PaginaInicio />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path="/recuperar-pass" element={<ForgotPassPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/planes" element={<PlanesProximo/>}></Route>
        
        <Route element={<RutasProtegidas/>} >
          <Route path='/busqueda' element={<Busqueda />}></Route>
          <Route path='/crear-podcast' element={<CrearPodcast/>}></Route>
          <Route path='/menu' element={<MenuPage/>}></Route>
          <Route path='/perfil/:id' element={<ProfilePage/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        
        </Route>


      </Routes>
      <Footer/>
    </BrowserRouter>


    </AuthProvider>

    

  );
}

export default App;
