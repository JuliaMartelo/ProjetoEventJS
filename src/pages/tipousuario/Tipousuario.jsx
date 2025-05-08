import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Banner from "../../assets/img/BannerUsuario.png"



const TipoUsuario = () => {
    return (
        <>
        
         <Header/>
        <main>
            <Cadastro 
            titulo="Cadastro tipo de usuário"
            input="Titulo"
            Imagem={Banner}/>

            <Lista tituloLista="Lista tipo de usuários"
            visibleEventType="none"
            visibleName="none"
            Name="Tipo Usuario"/>
        </main>

        <Footer/>

        </>
    )
} 

export default TipoUsuario;