import { useEffect, useState } from "react";


import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Banner from "../../assets/img/BannerCadastro.png";
import api from "../../Services/services";

// importar sweet alert
import Swal from 'sweetalert2';


const TipoEvento = () => {

    const [tipoEvento, setTipoEvento] = useState("");
    const [listaTipoEvento, setListaTipoEvento] = useState([]);

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

    async function cadastrarTipoEvento(e) {
        e.preventDefault();

        //Verificar se o input esta vindo vazio
        // trim apaga os espacos vazios
        console.log(tipoEvento);
        if (tipoEvento.trim() !== "") {

            // cadastrar um genero : post
            const cadastro = await api.post("TiposEventos", { tituloTipoEvento: tipoEvento });
            console.log(cadastro);

            alertar("success", "Cadastro realizado com sucesso!");

            setTipoEvento("");
            try {
            } catch (error) {
                alertar("error", "Erro!Entre em contato com o suporte!");
                console.log(error);
            }
        } else {
            alertar("Error", "Preencha o campo!")
        }
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("TiposEventos");
            setListaTipoEvento(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarTipoEvento(tipoEventoId) {
        try {
            Swal.fire({
                title: "Você tem certeza?",
                text: "Você não conseguira reverter!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim, deletar!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await api.delete(`tiposEventos/${tipoEventoId.idTipoEvento}`);

                    Swal.fire({
                        title: "Deletado!",
                        text: "Seu item foi deletado.",
                        icon: "success"
                    });
                }
            });
            listarTipoEvento();

        } catch (error) {
            console.log(error);
        }
    }

    async function editarTipoEvento(tipoEvento) {
        
        const { value: novoTipoEvento } = await Swal.fire({
            title: "Edite seu Tipo Evento",
            input: "text",
            inputLabel: "Novo Tipo Evento",
            inputValue: tipoEvento.tituloTipoEvento,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo precisa estar preenchido!";
                }
            }
        });
        if (novoTipoEvento) {
            try {
                console.log(tipoEvento.tituloTipoEvento);
                console.log(novoTipoEvento);
                await api.put(`tiposEventos/${tipoEvento.idTipoEvento}`, { tituloTipoEvento: novoTipoEvento });
                // setTipoEvento("")
                Swal.fire(`O Tipo Evento editado é ${novoTipoEvento}`);
            } catch (error) {
                console.log(error);
            }
        }
    }

    // useEffect(() => {
    //     // listarTipoEvento();
    //     console.log("oi");
        
    // }, [listaTipoEvento,tipoEvento]);

    useEffect(() => {
        listarTipoEvento()
    },[listaTipoEvento])


    return (
        <>
            <Header />
            <main>
                <Cadastro titulo="Cadastro tipos de eventos"
                    input="Titulo"
                    Imagem={Banner}
                    visibilidade="none"
                    funcCadastro={cadastrarTipoEvento}
                    valorInput={tipoEvento}
                    setValorInput={setTipoEvento}
                />

                <Lista
                    tituloLista="Tipos Eventos"
                    visibleEventType="none"
                    visibleName="none"

                    lista={listaTipoEvento}
                    tipoLista="TiposEventos"

                    funcExcluir={deletarTipoEvento}
                    funcEditar={editarTipoEvento}
                />
            </main>
            <Footer />
        </>
    )
}

export default TipoEvento;