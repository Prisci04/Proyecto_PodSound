
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./views/MainLayout";
import LoginPage from "./views/LoginPage";

function App() {
  // AQUI VAN LAS FUNCIONES

  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainLayout />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path="/inicio-Sesion" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
