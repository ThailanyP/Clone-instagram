import './Stories.css';

import Story from './componentes/Story';

import img01 from './imagens/miles morales.jpg';
import img02 from './imagens/deadpool.png'
import img03 from './imagens/static shock.jpg';
import img04 from './imagens/muniz.jpg';
import img05 from './imagens/robin.png';
import img06 from './imagens/ciborg.png';
import img07 from './imagens/Rex Salazar.jpg';


export default function Stories() {
    return(
        <div className="Stories">
            <Story imgPerfil={img01} nomeDaConta={"Morales"}  />
            <Story imgPerfil={img02} nomeDaConta={"Deadpool"}/>
            <Story imgPerfil={img03} nomeDaConta={"Shock"}/>
            <Story imgPerfil={img04} nomeDaConta={"Muniz"}/>
            <Story imgPerfil={img05} nomeDaConta={"Robin"}/>
            <Story imgPerfil={img06} nomeDaConta={"Ciborg"}/>
            <Story imgPerfil={img07} nomeDaConta={"Mut_Rex"}/>
        </div>
    )
}