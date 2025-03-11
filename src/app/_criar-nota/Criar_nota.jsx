'use client';
import { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

export default function CriarNota() {

    const [checked, setChecked] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [nota, setNota] = useState("");

    return (
        <div className="div-criar-nova">
            <div className="div-titulo">
                <input
                    className="input-criar-1"
                    placeholder="Título"
                    type="text"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo} />
                <div className="button-star">
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
            </div>
            <div className="div-nova-nota">
                <textarea
                    className="input-criar-2"
                    placeholder="Criar nota..."
                    onChange={(e) => setNota(e.target.value)}
                    value={nota} />
            </div>

            {titulo && nota &&
                <div className="div-icone-add">
                    <div> </div>
                    <button className="btn-base">
                        <IoAddOutline className="icone-add" />
                    </button>
                </div>
            }




        </div>
    )
}