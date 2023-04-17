import './Stories.css';

import Story from './componentes/Story';

import img01 from './imagens/miles morales.jpg';
import img02 from './imagens/deadpool.png'
import img03 from './imagens/static shock.jpg';


export default function Stories() {
    return(
        <div className="Stories">
            <Story imgPerfil={img01} nomeDaConta={"Miles Morales"}/>
            <Story imgPerfil={img02} nomeDaConta={"Deadpool"}/>
            <Story imgPerfil={img03} nomeDaConta={"Static Shock"}/>
           
        </div>
    )
}