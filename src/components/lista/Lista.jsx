import "./Lista.css";
import Editar from "../../assets/img/Editar.png";
import Deletar from "../../assets/img/Deletar.png";

const Lista = (props) => {
    return (
        <section className=" listagem">
            <div className="titulo_organizando">
                <h1>{props.tituloLista}</h1>
                <hr className="linha_titulo" />
            </div>

            <div className="tabela">
                <table>
                    <thead>
                        <tr className="table_cabecalho">
                            <th style={{ display: props.visibleTitle }}>Titulo</th>
                            <th style={{ display: props.visibleEventType }} id="tipoEvento">Tipo Evento </th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lista && props.lista.length > 0 ? (
                            props.lista.map((item) => (
                                <tr className="item_lista"
                                    key={props.tipoLista == "TiposEventos" ? item.IdTipoEvento : item.IdTipoUsuario}
                                >

                                    <td data-cell="Nome" style={{ display: props.visibleName}}></td>

                                    <td data-cell="Tipo Evento" style={{ display: props.Name }}>{props.tipoLista == "TiposEventos" ? item.tituloTipoEvento : item.tituloTipoUsuario}</td>

                                    <td data-cell="Editar" className="botao_editar">
                                        <img src={Editar}
                                            alt="Ícone editar"
                                            onClick={() => props.funcEditar(item)} />
                                    </td>

                                    <td data-cell="Excluir" className="botao_excluir">
                                        <img src={Deletar}
                                            alt="Ícone excluir"
                                            onClick={() => props.funcExcluir(item)} />
                                    </td>
                                </tr>
                            ))
                        ) :
                            (
                                <p>Nenhum TipoEvento foi encontrado.</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;