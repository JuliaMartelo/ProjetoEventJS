import "./Header.css"
import logo from "../../assets/img/logo.svg";
import logo_adm from "../../assets/img/logoadm.png";

const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                
                <img src={logo} alt="Logo do Event" />
                
                <nav className="nav_header"> 
                    
                    <a  className="link_header" to="/Home"href="">Home</a>
                    <a  className="link_header" to="/Eventos"href="">Eventos</a>
                    <a  className="link_header" to="/Usuarios"href="">Usuários</a>
                    <a  className="link_header" to="/Contato"href="">Contato</a>

                    
                </nav>
                    <div className="link_image">
                    <a  className="link_header" to="/Administrador"href="">Administrador</a>
                    <img src={logo_adm} alt="logo adm" />
                    </div>
            </div>
        </header>
    )
}

export default Header;