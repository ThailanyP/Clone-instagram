import './LadoEsquerdo.css';
import Logo from'./imagens/instagram.png';
import ItemMenu from './componentes/ItemMenu';

export default function LadoEsquerdo() {
    return(
        <div className="LadoEsquerdo">
            <div className="Logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="menu-principal">
               <ItemMenu icone="#" texto="Home"/>
               <ItemMenu icone="&" texto="Discover"/>
               <ItemMenu icone="*" texto="Reels"/>
                
            </div>

        </div>
    )
}