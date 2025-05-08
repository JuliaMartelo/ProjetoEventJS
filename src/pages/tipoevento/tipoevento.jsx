import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Banner from "../../assets/img/BannerCadastro.png";


const TipoEvento = () => {
    return (
        <>

            <Header />
            <main>
                <Cadastro titulo="Cadastro tipos de eventos"
                input="Titulo" 
                Imagem={Banner}/>

                <Lista
                 tituloLista="Lista tipo evento"
                 visibleEventType="none"
                 visibleName="none"
                 />
                

            </main>
            <Footer />

        </>
    )
}

export default TipoEvento;