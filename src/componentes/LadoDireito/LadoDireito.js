import './LadoDireito.css';
import img01 from './imagens/blue.jpg';
import img02 from './imagens/estelar.jpg';
import img03 from './imagens/gwen.jpg';
import img04 from './imagens/coringa.jpg';
import img05 from './imagens/mutano.jpg';

export default function LadoDireito() {
    return (
      <div className="LadoDireito">

        <div className="meuPerfil">
          <img className="Perfil" src={img01}/>
          <p className="desPerfil">
            <b>_blue_th</b> 
          <span>Blue_th</span> 
          </p>
          <p className="mudar">Mudar</p>
        </div>

          <div className="Sugestao">
            <div className="text">
              <p className="text1">Sugetões para você</p>
              <p className="text2"><b>Ver tudo</b></p>
            </div>

            {/* perfils */}

            <div className="info">
              <img className="Perfils" src={img02}/>

                <div className="descperfil">
                  <p className="desc">
                    <b>Esterlar_</b> 
                    <span className="seguir">Seguir</span>
                  </p>
                 <p className="desc2">Seguido(a) por Robin e mais 15 pessoas</p>
                 
                </div>
                
            </div>
            
            <div className="info">
              <img className="Perfils" src={img03}/>

                <div className="descperfil">
                  <p className="desc">
                    <b>_Gwen_</b> 
                    <span className="seguir">Seguir</span>
                  </p>
                 <p className="desc2">Seguido(a) por Morales e mais 5 pessoas</p>
                 
                </div>
                
            </div>
            
            <div className="info">
              <img className="Perfils" src={img04}/>

                <div className="descperfil">
                  <p className="desc">
                    <b>Coringa_HA</b> 
                    <span className="seguir">Seguir</span>
                  </p>
                 <p className="desc2">Seguido(a) por Batman e mais 50 pessoas</p>
                 
                </div>
                
            </div>

            <div className="info">
              <img className="Perfils" src={img05}/>

                <div className="descperfil">
                  <p className="desc">
                    <b>Mutaninho</b> 
                    <span className="seguir">Seguir</span>
                  </p>
                 <p className="desc2">Seguido(a) por Ravena e mais 15 pessoas</p>
                 
                </div>
                
            </div>


          </div>

        </div>
    );
  }

  
