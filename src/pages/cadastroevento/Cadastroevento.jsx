import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Banner from "../../assets/img/BannerEvento.png"


const CadastroEvento = () => {
    return (
        <>
        <Header/>
        <main>
            <Cadastro titulo="Cadastro de Evento"
            input="Nome"
            Imagem={Banner}/>

            <Lista tituloLista="Lista de eventos"
             visibleEventType=""
             visibleName=""/>
        </main>
        <Footer/>
        </>
    )
}

export default CadastroEvento;