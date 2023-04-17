import './Feed.css';

import Post from './componentes/Post/Post';

import imgPerfilExemplo01 from'./imagens/miles morales.jpg';
import imgPerfilExemplo02 from'./imagens/deadpool.png';
import imgPerfilExemplo03 from'./imagens/static shock.jpg';

import imgExemplo01 from './imagens/miles.jpg';
import imgExemplo02 from './imagens/spiderman-pc_fm4k .jpg';
import imgExemplo03 from './imagens/flash.jpg';
export default function Feed() {
    return (
        <div className="Feed">

            <Post nomePerfil="Miles Morales" imagemPost={imgExemplo01} imagemPerfil={imgPerfilExemplo01}/>
            <Post nomePerfil="Deadpool" imagemPost={imgExemplo02} imagemPerfil={imgPerfilExemplo02}/> 
            <Post nomePerfil="Static Shock" imagemPost={imgExemplo03} imagemPerfil={imgPerfilExemplo03}/>
            <Post nomePerfil="Tutu"/>
            <Post nomePerfil="Babu" />
        </div>
    )
}