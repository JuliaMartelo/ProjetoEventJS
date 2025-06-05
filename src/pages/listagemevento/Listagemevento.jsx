import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comentarios from "../../assets/img/Comentarios.png";
import Informacoes from "../../assets/img/informacoes.png";
// import Modal from "../../components/modal/Modal";
// import { format } from 'date-fns';
import "./Listagem.css"
// importando hoocks
import { use, useEffect, useState } from "react";
// importando o services
import api from "../../Services/services";

import Modal from "../../components/modal/Modal";

import Swal from "sweetalert2";


const Listagemevento = () => {

    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModal] = useState("");
    // "descricaoEvento" ou "comentario"
    const [dadosModal, setDadosModal] = useState({});
    // descricao, idEvento, etc.
    const [modalAberto, setModalAberto] = useState(false);

    const [filtroData, setFiltroData] = useState(["todos"])
    const [usuarioId, setUsuarioId] = useState("39E48AF3-9ED2-4919-987D-4DB5F4FAB72F");

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");
            const todosOsEventos = resposta.data;

            const respostaPresenca = await api.get("PresencasEventos/ListarMinhas/" + usuarioId)
            const minhasPresencas = respostaPresenca.data;

            const eventosComPresencas = todosOsEventos.map((atualEvento) => {
                const presenca = minhasPresencas.find(p => p.idEvento === atualEvento.idEvento);

                return {
                    // as informacoes tanto de evento quanto de eventos que possuiem presenca
                    ...atualEvento,//mantem os dados originais do evento atual
                    possuiPresenca: presenca?.situacao === true,
                    idpresenca: presenca?.idPresencaEvento || null
                }
            })

            setListaEventos(eventosComPresencas);


        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    function abrirModal(tipo, dados) {
        setModalAberto(true);
        // tipo de modal
        setTipoModal(tipo);
        // dados do modal
        setDadosModal(dados);

    }

    function fecharModal() {
        setModalAberto(false);
        setDadosModal({});
        setTipoModal("");
    }

    async function manipularPresenca(idEvento, presenca, idPresenca) {
        try {
            if (presenca && idPresenca != "") {
                // atualizacao: situacao para false
                await api.put(`PresencasEventos/${idPresenca}`, { situacao: false });
                Swal.fire('Removido!', 'Sua presença foi removida.', 'success');
            } else if (idPresenca != "") {
                // atualizacao: situacao para true 
                await api.put(`PresencasEventos/${idPresenca}`, { situacao: true });
                Swal.fire('Confirmado!', 'Sua presença foi confirmada.', 'success');

            } else {
                // cadastrar uma nova presenca
                await api.put(`PresencasEventos/${idPresenca}`, { situacao: true, idUsuario: usuarioId, idEvento: idEvento });
                Swal.fire('Confirmado!', 'Sua presença foi confirmada.', 'success');

            }
        } catch (error) {
            console.log(error);

        }
    }

    function filtrarEventos(){
        const hoje = new Date();

        return listaEventos.filter(evento => {
            const dataEvento = new Date(evento.dataEvento);

            if(filtroData.includes("todos")) return true;
            if(filtroData.includes("futuros") && dataEvento > hoje)return true ;
            if(filtroData.includes("passados") && dataEvento < hoje ) return true;

            
            return true;
        })
    }

    return (
        <>
            <Header />
            <main className="main_lista_eventos layout-grid">
                <div className="titulo">
                    <h1>Eventos</h1>
                    <hr />
                </div>
                <select onChange={(e) => setFiltroData([e.target.value])}>
                    <option value="" selected>Todos os Eventos</option>
                    <option value="futuros">Somentes Futuros</option>
                    <option value="passados">Somentes Passados</option>
                </select>
                <table className="tabela_lista_eventos">

                </table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Data do Evento</th>
                        <th>Tipo de Evento</th>
                        <th>Descrição</th>
                        <th>Comentários</th>
                        <th>Participar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEventos.length > 0 ? (
                        filtrarEventos() && filtrarEventos().map((item) => (


                            <tr>
                                <td>{item.nomeEvento}</td>
                                <td>{(item.dataEvento)}</td>
                                <td>{item.tiposEvento.tituloTipoEvento}</td>
                                <td>
                                    <button className="icon" onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}>
                                        <img src={Informacoes} alt="icone de informacoes" />
                                    </button>
                                </td>

                                <td>
                                    <button className="icon" onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}>
                                        <img src={Comentarios} alt="icone de comentarios" />
                                    </button>
                                </td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox"
                                            checked={item.possuiPresenca}
                                            onChange={() => manipularPresenca(item.idEvento, item.possuiPresenca, item.idPresenca)}
                                        />
                                        <span className="slider"></span>
                                    </label>

                                </td>
                            </tr>
                        ))
                    ) : (
                        <p>Não existe eventos cadastrados!</p>
                    )}

                </tbody>
            </main>
            <Footer />
            {modalAberto && (
                <Modal
                    titulo={tipoModal === "descricaoEvento" ? "Descrição do evento" : "Comentário"}
                    // verificando qual e o tipo de modal!
                    tipoModal={tipoModal}

                    idEvento={dadosModal.idEvento}

                    descricao={dadosModal.descricao}

                    fecharModal={fecharModal}
                />

            )}

        </>
    )
}

export default Listagemevento;