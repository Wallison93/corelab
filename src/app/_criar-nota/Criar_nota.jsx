'use client';
import { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

export default function CriarNota() {

    const [checked, setChecked] = useState(false);

    return (
        <div className="div-criar-nova">
            <div className="div-titulo">
                <input
                    className="input-criar-1"
                    placeholder="Título" />
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
                <textarea className="input-criar-2" placeholder="Criar nota..." />
            </div>
        </div>
    )
}