import './Feed.css';

import Post from './componentes/Post/Post';

import imgPerfilExemplo01 from'./imagens/miles morales.jpg';
import imgPerfilExemplo02 from'./imagens/deadpool.png';
import imgPerfilExemplo03 from'./imagens/static shock.jpg';
import imgPerfilExemplo04 from'./imagens/X-Men Symbol.jpg';
import imgPerfilExemplo05 from'./imagens/robin.png';

import imgExemplo01 from './imagens/miles.jpg';
import imgExemplo02 from './imagens/Dead.jpg';
import imgExemplo03 from './imagens/superchoque.jpg';
import imgExemplo04 from './imagens/X-Men.jpg';
import imgExemplo05 from './imagens/teentitans.png';

export default function Feed() {
    return (
        <div className="Feed">

            <Post nomePerfil="Morales" imagemPost={imgExemplo01} imagemPerfil={imgPerfilExemplo01} 
            legenda="Balançando pelas ruas de Nova York! 🕷️🌆💥 #HomemAranha #MilesMorales #AmoMinhaVida"/>

            <Post nomePerfil="Deadpool" imagemPost={imgExemplo02} imagemPerfil={imgPerfilExemplo02} legenda="Olha quem está causando no Instagram! 💥😎 #Deadpool #MercWithAMouth #SelfieQueen"/> 

            <Post nomePerfil="Shock" imagemPost={imgExemplo03} imagemPerfil={imgPerfilExemplo03} legenda="Eletrizando a cidade com meu poder! ⚡💥 #SuperChoque #HeróiElétrico #ChoqueDeEnergia"/>

            <Post nomePerfil="X-men Evolution" imagemPost={imgExemplo04} imagemPerfil={imgPerfilExemplo04} legenda="Mutantes unidos, lutando pelo bem! 🦸‍♂️✨ #XMenEvolution #MutantesUnidos #PoderX"/>

            <Post nomePerfil="Robin" imagemPost={imgExemplo05} imagemPerfil={imgPerfilExemplo05} legenda="Agora sim, á equipe do sonhos! 💪✨ #Titãs #teenTitans"/>
            
        </div>
    )
}