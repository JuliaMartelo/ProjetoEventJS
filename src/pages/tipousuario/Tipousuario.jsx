import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import Footer from "../../components/footer/Footer";
import Banner from "../../assets/img/BannerUsuario.png"

// importar api
import api from "../../Services/services";

// importar o sweet alert
import Swal from "sweetalert2";



const TipoUsuario = () => {



    const [tipoUsuario, setTipoUsuario] = useState("");
    const [listaTipoUsuario, setListaTipoUsuario] =useState ([]);

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

    async function cadastrarTipoUsuario (e){
        e.preventDefault();

        //Verificar se o input esta vindo vazio
        // trim apaga os espacos vazios
        console.log(tipoUsuario);
        if(tipoUsuario.trim() !== ""){
            // cadastrar um tipo de usuario
            const cadastro = await api.post("TiposUsuarios", {tituloTipoUsuario: tipoUsuario});
            console.log(cadastro);

            alertar("success", "Cadastro realizado com sucesso!");

            setTipoUsuario("");
            try{

            }catch(error){
                alertar("error", "Erro! Entre em contato com o suporte!");
                console.log(error);
                 }
            
        }else {
            alertar("Error", "Preencha o campo!")
        }
        
    }

    async function listarTipoUsuario() {
        try{
            const resposta = await api.get("TiposUsuarios");
            setListaTipoUsuario(resposta.data);
        }catch(error){
            console.log(error);
            
        }
    }

    async function deletarTipoUsuario(id) {
        try{
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
                    await api.delete(`TiposUsuarios/${id.idTipoUsuario}`);

                    Swal.fire({
                        title: "Deletado!",
                        text: "Seu item foi deletado.",
                        icon: "success"
                    });
                }
            });
            listarTipoUsuario();

        }catch(error){
            console.log(error);
            
        }
    }

    async function editarTipoUsuario(tipoUsuario){

          const { value: novoTipoUsuario } = await Swal.fire({
            title: "Edite seu Tipo Usuario",
            input: "text",
            inputLabel: "Novo Tipo Usuario",
            inputValue: tipoUsuario.tituloTipoUsuario,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo precisa estar preenchido!";
                }
            }
        });
        if (novoTipoUsuario) {
            try {
                console.log(tipoUsuario.tituloTipoUsuario);
                console.log(novoTipoUsuario);
                await api.put(`TiposUsuarios/${tipoUsuario.idTipoUsuario}`, { tituloTipoUsuario: novoTipoUsuario });
                // setTipoEvento("")
                Swal.fire(`O Tipo Usuario editado é ${novoTipoUsuario}`);
            } catch (error) {
                console.log(error);
            }
        }
    }



    useEffect(() => {
        listarTipoUsuario()
    },[listaTipoUsuario])


    return (


        <>
        
         <Header/>
        <main>
            <Cadastro 
            titulo="Cadastro tipo de usuário"
            input="Titulo"
            Imagem={Banner}
            visibilidade="none"
            funcCadastro={cadastrarTipoUsuario}
            valorInput={tipoUsuario}
            setValorInput={setTipoUsuario}
            />

            <Lista tituloLista="Lista tipo de usuários"
            visibleEventType="none"
            visibleName="none"
            Name="Tipo Usuario"

            lista={listaTipoUsuario}
            tipoLista="TiposUsuarios"

            funcExcluir={deletarTipoUsuario}
            funcEditar={editarTipoUsuario}


            />
        </main>

        <Footer/>

        </>
    )
} 

export default TipoUsuario;