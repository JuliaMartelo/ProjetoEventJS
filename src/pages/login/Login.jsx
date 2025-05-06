import logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";

const Login = () => {
    return (
        <main className="main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={logo} alt="Logo do Event" />
            <form className="form_login" action="">    
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <p>Esqueceu a senha?</p>
                <Botao nomeDoBotao="Login"/>
            </form>
          </section>
        </main>
    )
}

export default Login;