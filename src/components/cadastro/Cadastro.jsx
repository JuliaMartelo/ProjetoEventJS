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
                            value={props.valorInput}
                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>

                    <div className="campo_cad_genero">
                        <input type="date"
                            name="date"
                            placeholder={props.data}
                            value={props.valorInput}
                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>

                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <select name="" id="">
                            <option value="" disabled selected>Tipo Evento</option>
                           
                        </select>
                    </div>

                    <div className="campo_cad_instituicao">
                        <select name="" id="">
                            <option value="" disabled selected>Instituicao</option>
                            
                        </select>

                        <input type="text"
                            name="Nome"
                            placeholder={props.descricao}
                            value={props.valorInput}
                            onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>



                    <Botao nomeDoBotao="Cadastrar" />
                </form>

            </div>
        </section>
    )
}

export default Cadastro;