import './LadoEsquerdo.css';
import Logo from './imagens/instagram.png';
import ItemMenu from './componentes/ItemMenu';
import {AiFillHome } from 'react-icons/ai';
import {MdOutlineExplore } from 'react-icons/md';
import {FiPlusSquare } from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {RxAvatar} from 'react-icons/rx';
import {RiMessengerLine} from 'react-icons/ri';
import {CgClapperBoard} from 'react-icons/cg';



export default function LadoEsquerdo() {
  return (
    <div className="LadoEsquerdo">
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu-principal">
        <ItemMenu icone={<AiFillHome />} texto=" Página inicial" />
        <ItemMenu icone={<AiOutlineSearch/> }texto=" Pequisar" />
        <ItemMenu icone={<MdOutlineExplore/> } texto=" Explorar" />
        <ItemMenu icone={<CgClapperBoard/>} texto=" Reels" />
        <ItemMenu icone={<RiMessengerLine/>} texto=" Mensagens" />
        <ItemMenu icone={<AiOutlineHeart/>} texto=" Notificações" />
        <ItemMenu icone={<FiPlusSquare/>} texto=" Criar" />
        <ItemMenu icone={<RxAvatar/>} texto=" Perfil" />
        <ItemMenu icone={<AiOutlineMenu/>} texto=" Mais" />
      </div>
    </div>
  );
}
