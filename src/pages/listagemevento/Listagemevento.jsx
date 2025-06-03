import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Comentarios from "../../assets/img/Comentarios.png";
import Informacoes from "../../assets/img/informacoes.png";
import Modal from "../../components/modal/Modal";
import { format } from "date-fns";
import "./Listagem.css"
// importando hoocks
import { useEffect, useState } from "react";
// importando o services
import api from "../../Services/services";


const Listagemevento = () => {

    const [listaEventos, setListaEventos] = useState([]);

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");

            setListaEventos(resposta.data);
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    return (
        <>
            <Header />
            <main className="main_lista_eventos layout-grid">
                <div className="titulo">
                    <h1>Eventos</h1>
                    <hr />
                </div>
                <select name="" id="">
                    <option value="" selected>Todos os Eventos</option>
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
                        listaEventos.map((item) => (


                            <tr>
                                <td>{item.nomeEvento}</td>
                                <td>{format(item.dataEvento, "dd/MM/yy")}</td>
                                <td>{item.tiposEvento.tituloTipoEvento}</td>
                                <td>
                                    <button className="icon">
                                        <img src={Informacoes} alt="icone de informacoes" />
                                    </button>
                                </td>

                                <td>
                                    <button className="icon">
                                        <img src={Comentarios} alt="icone de comentarios" />
                                    </button>
                                </td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" />
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
            <Modal/>

        </>
    )
}

export default Listagemevento;