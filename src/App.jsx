
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";

import LoginPage from "./views/LoginPage";
import Footer from "./components/Footer";
import MainBusqueda from "./views/MainBusqueda";
import CategoriasID from "./views/CategoriasID";
import Upload from "./views/Upload";

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
          <Route path='/menu' element={<MenuPage/>}></Route>
          <Route path='/perfil/:id' element={<ProfilePage/>}></Route>
          <Route path="/main-categoria" element={<MainBusqueda />}> </Route>
          <Route path="/categoria/:id" element={<CategoriasID />}> </Route>
          <Route path="/podcast" element={<Upload />}> </Route>
          <Route path="*" element={<NotFound/>}></Route>
        
        </Route>


      </Routes>
      <Footer/>
    </BrowserRouter>


    </AuthProvider>

    

  );
}

export default App;
