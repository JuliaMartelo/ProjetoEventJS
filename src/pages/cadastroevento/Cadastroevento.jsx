import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Banner from "../../assets/img/BannerEvento.png"
import { useEffect, useState } from "react";

import api from "../../Services/services";

import Swal from "sweetalert2";


const CadastroEvento = () => {

    const [cadastraNome, setcadastraNome] = useState("");
    const [cadastraData, setcadastraData] = useState("");
    const [cadastraTipoEvento, setcadastraTipoEvento] = useState("");
    const [cadastraInstituicao, setcadastraInstituicao] = useState("");
    const [cadastraDescricao, setcadastraDescricao] = useState("");
    const [listarEvento, setListarEvento] = useState([]);

    function alertar(icone, mensagem) {
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

    async function cadastrarEvento() {

        console.log(cadastraNome);
        if (cadastraNome.trim !== "") {
            const cadastro = await api.post("Eventos", { nomeEvento: cadastraNome, dataEvento: cadastraData, idTipoEvento: cadastraTipoEvento, descricao: cadastraDescricao, idInstituicao: cadastraInstituicao });
            console.log(cadastro);

            alertar("success", "Cadastro realizado com sucesso!");

            setcadastraNome("");
            setcadastraData("");
            setcadastraTipoEvento("");
            setcadastraDescricao("");
            setcadastraInstituicao("");

            try {

            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte!");
                console.log(error);

            }
        } else {
            alertar("Error", "Preencha o campo!")
        }

    }

//    async function listarEvento() {
//         try {
//             const resposta = await api.get("Eventos")
//             setListaEvento(resposta.data)
//         } catch (error) {
//             console.log(error);

//         }
//     }


    useEffect(() => {
        listarEvento()
    }, [listarEvento])



    return (
        <>
            <Header />
            <main>
                <Cadastro titulo="Cadastro de Evento"
                    input="Nome"
                    Imagem={Banner}
                    descricao="descricao"
                    valorInput1={cadastraNome}
                    setValorInput1={setcadastraNome}

                    valorInput2={cadastraData}
                    setValorInput2={setcadastraData}

                    valorInput3={cadastraTipoEvento}
                    setValorInput3={setcadastraTipoEvento}

                    valorInput4={cadastraInstituicao}
                    setValorInput4={setcadastraInstituicao}

                    valorInput5={cadastraDescricao}
                    setValorInput5={setcadastraDescricao}

                    lista={cadastraTipoEvento}


                />

                <Lista tituloLista="Lista de eventos"
                    visibleEventType=""
                    visibleName=""
                    TipoDataEvento="Data do Evento"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroEvento;