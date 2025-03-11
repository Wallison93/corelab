import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./_navbar/navbar";
import CriarNota from "./_criar-nota/Criar_nota";
import Favoritos from "./_favoritos/favoritos";

export default function Home() {
  return (
    <div className="div-home-principal">

      <div className="navbar">
        <Navbar />
      </div>
      <div className="div-criar-nota">
        <CriarNota />
      </div>



      <div className="div-favoritos-home">
        <Favoritos />
      </div>




    </div>
  );
}
