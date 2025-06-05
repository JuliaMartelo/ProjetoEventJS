import { useEffect, useState } from "react";
import Deletar from "../../assets/img/Lixeira.png";

import api from "../../Services/services";

import "./Modal.css";

const Modal = (props) => {

    const [comentarios, setComentarios] = useState([]);

       const [usuarioId, setUsuarioId] = useState("39E48AF3-9ED2-4919-987D-4DB5F4FAB72F");

       const [novoComentario, setNovoComentario] = useState("");

    async function listarComentarios(){
        try{
            const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`)

            setComentarios(resposta.data);
        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(() => {
        listarComentarios();
    }, [])

    async function cadastrarComentario (comentario) {
        try{
            await api.post("ComentariosEventos", {idUsuario: usuarioId, idEvento: props.idEvento, Descricao:comentario})
        }catch(error){
            console.log(error);
            
        }
    }

    async function deletarComentario(idComentario){
        try{
            await api.delete(`ComentariosEventos/${idComentario}`);
        }catch(error){
            console.log(error);
            
        }
    }

    return (
        <>
            <div className="model-overlay" onClick={props.fecharModal}></div>
            <div className="model">
                <h1>{props.titulo}</h1>
                <div className="model_conteudo">
                    {props.modalTipo === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ) : (
                        <>
                            {comentarios.map((item) => (
                                <div key={item.idComentarioEvento}>
                                    <strong>{item.usuario.nomeUsuario}</strong>
                                    <img src={Deletar} alt="deletar" 
                                    onClick={() => deletarComentario(item.idComentario)}
                                    />
                                    <p>{item.descricao}</p>
                                </div>
                            ))}
                            <div>
                                <input type="text" 
                                placeholder="Escreva seu comentario..."
                                value={novoComentario}
                                onChange={(e) => setNovoComentario(e.target.value)}
                                />
                                <button onClick={() => cadastrarComentario(novoComentario)}>
                                    Cadastrar
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Modal
