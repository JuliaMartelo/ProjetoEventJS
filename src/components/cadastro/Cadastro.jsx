import "./Cadastro.css";
import Banner from "../../assets/img/BannerCadastro.png";
import Botao from "../botao/Botao";

const Cadastro = () => {
    return (
        <section className="layout_grid cadastro_evento">
            <h1>Cadastro tipos de Eventos</h1>
            <hr />
            <form className="form_cadastro" action="Banner de cadastro">
                <img className="img_cadastro"src={Banner} alt="" />

                <div className="campo_input">
                    <input type="nome" name="nome" placeholder="Titulo" />
                </div>
               {/* <Botao nomeDoBotao="Cadastrar"/> */}
            </form>
        </section>
    )
}

export default Cadastro;