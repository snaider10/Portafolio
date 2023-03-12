export const ContactoCarta = (props) =>{
    return(
        <a className="contactosEnlace" href={props.link} target="_blank">
            <div className="contacto-cuerpo">
                <div className="contacto-contenido">
                    <i className={props.icono}></i>
                </div>
            </div>
        </a>
    )
}