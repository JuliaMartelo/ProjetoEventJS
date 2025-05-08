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

                <form className="form_cadastro" action="Banner de cadastro">

                    <input type="text" name="Nome" placeholder={props.input} />
                     <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <select name="" id="">
                            <option value="" disabled selected>Tipo Evento</option>
                            <option value="">Esportes</option>
                            <option value="">Digitação</option>
                            <option value="">Desenvolvimento</option>
                        </select>
                    </div>

                    <Botao nomeDoBotao="Cadastrar" />
                </form>

            </div>
        </section>
    )
}

export default Cadastro;