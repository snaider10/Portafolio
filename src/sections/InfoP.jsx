import webDeveloper from "../images/Personal data _Flatline.svg";

import {
  CiHeadphones,
  CiPen,
  CiPenpot,
  CiUser,
  CiTimer,
  CiPizza,
  CiGlass,
} from "react-icons/ci";
import { useState } from "react";

export const SobreMi = () => {
  const [activo, setActivo] = useState(false);
  const mouseEncima = () => {
    setActivo(true);
  };
  const mouseNoEncima = () => {
    setActivo(false);
  };
  return (
    <div
      className="miDescripcion"
      onMouseOver={mouseEncima}
      onMouseOut={mouseNoEncima}
    >
      <div className="descripcionTl">
        <h1 className={activo ? "tituloFragmentoActivo" : ""}>Sobre Mi</h1>
        <CiUser
          className={
            activo ? "iconoFragmentoActivo" : "iconoFragmentoDesactivado"
          }
          id="iconoFragmento"
        />
      </div>

      <p>
        Hola, me llamo Esnaider Ortega, mayormente soy autodidacta y trato de
        mejorar continuamente mis habilidades como desarollador para rendir y
        trabajar de la mejor manera en el amplio mundo del desarollo web.
      </p>
    </div>
  );
};

export const ExperienciaLaboral = () => {
  const [activo, setActivo] = useState(false);
  const mouseEncima = () => {
    setActivo(true);
  };
  const mouseNoEncima = () => {
    setActivo(false);
  };
  return (
    <div
      className="miExperiencia"
      onMouseOver={mouseEncima}
      onMouseOut={mouseNoEncima}
    >
      <div className="experienciaTl">
        <h1 className={activo ? "tituloFragmentoActivo" : ""}>Experiencia</h1>
        <CiTimer
          className={
            activo ? "iconoFragmentoActivo" : "iconoFragmentoDesactivado"
          }
          id="iconoFragmento"
        />
      </div>

      <p>
        Actualmente no tengo experiencia laboral pero estoy buscando trabajo
        para empezar lo mas pronto posible.
      </p>
    </div>
  );
};

export const Pasatiempos = () => {
  const [activo, setActivo] = useState(false);
  const mouseEncima = () => {
    setActivo(true);
  };
  const mouseNoEncima = () => {
    setActivo(false);
  };
  return (
    <div
      className="misPasatiempos"
      onMouseOver={mouseEncima}
      onMouseOut={mouseNoEncima}
    >
      <div className="experienciaTl">
        <h1 className={activo ? "tituloFragmentoActivo" : ""}>Pasatiempos</h1>
        <CiPizza
          className={
            activo ? "iconoFragmentoActivo" : "iconoFragmentoDesactivado"
          }
          id="iconoFragmento"
        />
      </div>

      <ul>
        <li>
          <CiHeadphones /> Escuchar Musica
        </li>
        <li>
          <CiPenpot />
          Leer
        </li>
        <li>
          <CiPen />
          Dibujar
        </li>
        <li>
          <CiGlass /> Una buena taza de cafe
        </li>
      </ul>
    </div>
  );
};

export function InfoSobreMi() {
  return (
    <>
      <div className="sobreMi">
        <img className="inicioImagen-foto" src={webDeveloper} />
        <div className="sobreMi-contenido">
          <SobreMi />
          <ExperienciaLaboral />
          <Pasatiempos />
        </div>
      </div>
      
    </>
  );
}
