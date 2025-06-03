import "./Cadastro.css";
import Banner from "../../assets/img/BannerCadastro.png";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <section className="layout_grid cadastro_evento">
            <div className="titulo">
                <h1>{props.titulo}</h1>
                <hr />
            </div>

            <div className="formulario">
                <img className="img_cadastro" src={props.Imagem} alt="" />

                <form className="form_cadastro" action="Banner de cadastro" onSubmit={props.funcCadastro}>

                    <div className="campo_cad_genero">
                        <input type="text"
                            name="Nome"
                            placeholder={props.input}
                            value={props.valorInput1}
                            onChange={(e) => props.setValorInput1(e.target.value)}
                        />
                    </div>

                    <div className="campo_cad_genero">
                        <input type="date"
                            name="date"
                            placeholder={props.data}
                            value={props.valorInput2}
                            onChange={(e) => props.setValorInput2(e.target.value)}
                        />
                    </div>

                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <select name="" id=""
                            value={props.valorInput3} onChange={(e) => props.setValorInput3(e.target.value)}>
                           
                            <option value="" disabled>Tipo de Evento</option>
                            
                                {props.lista && props.lista.length > 0 && props.lista.map((itemTipoEvento) => (
                                    (
                                        <option
                                            key={itemTipoEvento.idTipoEvento}
                                            value={itemTipoEvento.idTipoEvento}
                                        >
                                            {itemTipoEvento.tituloTipoEvento}

                                            {/*<option value={itemTipoEvento.idTipoEvento}>{itemTipoEvento.tituloTipoEvento}</option>*/}
                                        </option>

                                    ))
                                )}
                           
                        </select>
                    </div>

                    <div className="campo_cad_instituicao">
                        <select name="" id="">
                            <option value={props.valorInput4} disabled selected>Instituicao</option>
                             onChange={(e) => props.setValorInput4(e.target.value)}
                        </select>
                        </div>
                        <div className="input_descricao">

                        <input type="text"
                            name="Nome"
                            placeholder={props.descricao}
                            value={props.valorInput5}
                            onChange={(e) => props.setValorInput5(e.target.value)}
                        />
                        </div>



                    <Botao nomeDoBotao="Cadastrar" />
                </form>

            </div>
        </section>
    )
}

export default Cadastro;