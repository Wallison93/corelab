'use client';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiPaintFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

import { useEffect, useRef, useState } from "react";

import Draggable from 'react-draggable';    //npm install react-draggable


export default function Favoritos() {

    const divRef = useRef(null);
    const [checked, setChecked] = useState(false);
    const [bgColor, setBgColor] = useState("#fff");
    const [modalAberto, setModalAberto] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [nota, setNota] = useState("");
    const [edit, setEdit] = useState(false);
    const [permiteEdit, setPermiteEdit] = useState(false);

    const cores = ["#BAE2FF", "#B9FFDD", "#FFE8AC", "#FFCAB9", "#F99494", "#9DD6FF", "#ECA1FF", "#DAFF8B", "#FFA285", "#CDCDCD", "#979797", "#A99A7C"];

    /* 
        const alterarCor = (cor) => {
            setBgColor(cor);
            setModalAberto(false); // Fecha o modal após a seleção
        }; */

    function alterarCor(cor) {
        setBgColor(cor);
        setModalAberto(false);
    }




    useEffect(() => {
        if (edit === true) {
            setPermiteEdit(false)
        }
        else {
            setPermiteEdit(true)
        }
    }, [edit])



    return (
        <div className="div-favoritos">
            <label className="label-fav">
                Favoritos
            </label>

            <div className="notas-favoritas " style={{ position: 'relative', height: '100vh' }} >
                <Draggable nodeRef={divRef} bounds="parent">
                    <div ref={divRef} className="div-card-fav" style={{ backgroundColor: bgColor, position: 'relative' }}>
                        <div className="div-child-1">
                            <input
                                className="input-criar-1"
                                placeholder="Título"
                                type="text"
                                onChange={(e) => setTitulo(e.target.value)}
                                value={titulo}
                                disabled={permiteEdit}
                            />
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
                            <textarea
                                className="input-criar-3"
                                placeholder="Conteúdo"
                                onChange={(e) => setNota(e.target.value)}
                                value={nota}
                                disabled={permiteEdit} />
                        </div>
                        <div className="div-child-3">
                            <div className="primeiros-icones">
                                <button className="btn-base" onClick={() => setEdit(!edit)}>
                                    <MdOutlineModeEditOutline className="icones-rodape-notas" />
                                </button>
                                <RiPaintFill className="icones-rodape-notas" onClick={() => setModalAberto(true)} />
                            </div>
                            {edit === true &&
                                <button className="btn-base">
                                    <IoAddOutline className="icone-add" />
                                </button>
                            }
                            {edit === false &&
                                <button className="btn-base">
                                    <IoMdClose className='icone-close-fav' />
                                </button>
                            }
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