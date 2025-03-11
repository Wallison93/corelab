'use client';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiPaintFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

import { useRef, useState } from "react";

import Draggable from 'react-draggable';    //npm install react-draggable


export default function Favoritos() {

    const divRef = useRef(null);
    const [checked, setChecked] = useState(false);
    const [bgColor, setBgColor] = useState("#fff");
    const [modalAberto, setModalAberto] = useState(false);

    const cores = ["#BAE2FF", "#B9FFDD", "#FFE8AC", "#FFCAB9", "#F99494", "#9DD6FF", "#ECA1FF", "#DAFF8B", "#FFA285", "#CDCDCD", "#979797", "#A99A7C"];


    const alterarCor = (cor) => {
        setBgColor(cor);
        setModalAberto(false); // Fecha o modal após a seleção
    };



    return (
        <div className="div-favoritos">
            <label className="label-fav">
                Favoritos
            </label>

            <div className="notas-favoritas "  style={{ position: 'relative', height:'100vh'}} >
                <Draggable nodeRef={divRef} bounds="parent">
                    <div ref={divRef} className="div-card-fav" style={{ backgroundColor: bgColor, position: 'relative'  }}>
                        <div className="div-child-1">
                            <h3>
                                Título
                            </h3>
                    <label className="star-checkbox">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            className="hidden"
                        />
                        {checked ?
                            <IoMdStar className="star filled" />
                            :
                            <IoIosStarOutline className="star" />
                        }
                    </label>
                        </div>
                        <div className="div-child-2">
                            <a className="texto-quebra">
                                conteudo
                            </a>
                        </div>
                        <div className="div-child-3">
                            <div className="primeiros-icones">
                                <MdOutlineModeEditOutline className="icones-rodape-notas" />
                                <RiPaintFill className="icones-rodape-notas" onClick={() => setModalAberto(true)} />
                            </div>
                            <div className="segundo-icone">
                                <IoMdClose className='icone-close-fav' />
                            </div>
                        </div>
                        {modalAberto &&
                            <div className="div-cores">
                                <div className="cores-container">
                                    {cores.map((cor) => (
                                        <div
                                            key={cor}
                                            className="cor-item"
                                            style={{ backgroundColor: cor }}
                                            onClick={() => alterarCor(cor)}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </Draggable>



            </div>

        </div>
    )
}