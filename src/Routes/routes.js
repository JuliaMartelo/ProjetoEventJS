import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import TipoEvento from "../pages/tipoevento/TipoEvento";
import TipoUsuario from "../pages/tipousuario/Tipousuario";
import Cadastroevento from "../pages/cadastroevento/Cadastroevento";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} exact />
                <Route path="/TipoEvento" element={<TipoEvento/>} exact />
                <Route path="/TipoUsuario" element={<TipoUsuario/>} exact />
                <Route path="/Cadastroevento" element={<Cadastroevento/>} exact />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;