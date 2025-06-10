import logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";
import api from "../../Services/services.js";
import { useState } from "react";
import Swal from "sweetalert2";
import { userDecodeToken } from "../../auth/auth.js";
import secureLocalStorage from "react-secure-storage";
import {useNavigate} from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

   async function realizarAutenticacao(e) {

    e.preventDefault();
    const usuario = {
        email: email,
        senha: senha
    }
    if(senha.trim() != "" || email.trim() != ""){
      try{
      
       const resposta = await api.post("Login", usuario);

        const token = resposta.data.token;

        if(token){
          const tokenDecodificado = userDecodeToken(token);
            // console.log("Token decodificado:");
            // console.log(tokenDecodificado);
            
            secureLocalStorage.setItem("tokenLogin",JSON.stringify(tokenDecodificado));

            if(tokenDecodificado.tipoUsuario === "aluno"){
                // redirecionar a tela de aluno(branca)
                navigate("/Listagemevento")
            }else{
                // ele vai me encaminhar para tela de cadastro de eventos(vermelha)
                navigate("/Cadastroevento")
            }
            
        }
       
       }catch(error){
        console.log(error);
         Swal.fire("Email ou senha inválidos! Para dúvidas, entre em contato com o suporte!");
       }   
    }else{
         Swal.fire("Preencha os campos vazios para realizar o login!");
    }
      
    }

    return (
        <main className="main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={logo} alt="Logo do Event" />
            <form className="form_login" onSubmit={realizarAutenticacao}>    
                <div className="campos_login">
                    <div className="campo_input" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    >
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="campo_input"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    >
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <a href="">Esqueceu a senha?</a>
                <Botao nomeDoBotao="Login"/>
            </form>
          </section>
        </main>
    )
}

export default Login;