
import './Post.css';
//propriedades
export default function Post (props) {
    return(
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor">
                    <img alt="Perfil de um Super Herói" src={props.imagemPerfil}/>
                </div>
                <div className="NomePerfilAutor">{props.nomePerfil}</div>
                <div className="MenuBarraSuperior"></div>
            </div>
            <div className="ConteudoPost"><img src= {props.imagemPost}></img></div>
        </div>

    )
}