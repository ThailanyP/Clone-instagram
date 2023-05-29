
import './Post.css';
import {BsHeart} from 'react-icons/bs';
import {BsChat} from 'react-icons/bs';
import {BsSend} from 'react-icons/bs';
import {BsBookmark} from 'react-icons/bs';

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
            <div class="BarraPost">
                <div class="itens">
                   <BsHeart/>
                    <BsChat/>
                    <BsSend/>
                </div> 
                <div class="iten">
                    <BsBookmark/>
                </div>   
            </div>
            <div class="LegendaPost">
                {props.legenda}
            </div>
            <div className="comentarios"> 
            <p classname="l2">Ver todos os comentários ... </p>
                <p classname="l1">Há 1 DIA <b>Ver tradução</b></p>
            </div>
        </div>

    )
}