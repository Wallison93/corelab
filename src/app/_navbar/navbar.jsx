
import Image from 'next/image'
import Logo from '../imagens/icone-corenote.png';
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {

    return (
        <div className='div-navbar-principal'>
            <Image
                src={Logo}
                className='Logo-navbar'
                alt="logotipo" />
            <label className='label-logo'>
                CoreNotes
            </label>
            <div className='div-input-pesquisa'>
                <input
                    className='input-pesquisa'
                    placeholder='Pesquisar notas' />
                <FaSearch className='icone-pesquisa' />
            </div>
            <IoMdClose className='icone-close' />
        </div>
    )
}