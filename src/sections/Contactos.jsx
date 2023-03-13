import { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { contactos } from "../data/contactos";
import { ContactoCarta } from "../components/contactoCarta";
import webDeveloper from "../images/Calling_Flatline.svg";

export const Contactos = () => {
  const [activo, setActivo] = useState(false);
  const mouseEncima = () => {
    setActivo(true);
  };
  const mouseNoEncima = () => {
    setActivo(false);
  };
  return (
    <footer>
      <div
        className="finPagina"
        onMouseOver={mouseEncima}
        onMouseOut={mouseNoEncima}
      >
        <img src={webDeveloper} />
        <div>
          <div className="descripcionTl">
            <h1
              className={activo ? "tituloFragmentoActivo" : ""}
              id="contactosTitulo"
            >
              Contactos
            </h1>
            <CiPhone
              className={
                activo ? "iconoFragmentoActivo" : "iconoFragmentoDesactivado"
              }
              id="iconoFragmento"
            />
          </div>
          <p className="contactosDespedida">Nos vemos pronto! </p>
          <div className="contactosContenedor">
            {contactos.map((contacto) => (
              <ContactoCarta
                key={contacto.id}
                icono={contacto.icono}
                link={contacto.link}
              ></ContactoCarta>
            ))}
          </div>
        </div>
      </div>
      
      
    </footer>
  );
};
