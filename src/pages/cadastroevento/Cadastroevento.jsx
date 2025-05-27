import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Banner from "../../assets/img/BannerEvento.png"
import { useState } from "react";


const CadastroEvento = () => {

    const [cadastraEvento, setcadastraEvento] = useState ("");

    function alertar (icone, mensagem) {
            const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer:
                            3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: icone,
                        title: mensagem
                    });
        }

        async function cadastrarEvento (e) {
            e.preventDefault();

            console.log(cadastraEvento);
            if(cadastraEvento.trim !== ""){
                const cadastro = await api.post("Eventos", {nomeEvento:cadastraEvento, dataEvento:cadastraEvento, })
            }
            
        }

    return (
        <>
        <Header/>
        <main>
            <Cadastro titulo="Cadastro de Evento"
            input="Nome"
            Imagem={Banner}
            descricao="descricao"
            />

            <Lista tituloLista="Lista de eventos"
             visibleEventType=""
             visibleName=""/>
        </main>
        <Footer/>
        </>
    )
}

export default CadastroEvento;