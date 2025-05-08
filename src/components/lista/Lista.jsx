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
                        <tr className="item_lista">
                            <td data-cell="Nome" style={{ display: props.visibleName}} >Nome</td>
                            <td data-cell="Tipo Evento" style={{ display: props.Name}} >Tipo Evento</td>
                            <td data-cell="Editar">
                                <img src={Editar} alt="Ícone editar" />
                            </td>
                            <td data-cell="Excluir">
                                <img src={Deletar} alt="Ícone excluir" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Lista;