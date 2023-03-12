export const ProyectoCarta = (props) =>{
    return(
        <a href={props.link} target="_blank">
            <div className="proyectosCarta">
                <div className="proyectosCarta-imagen">
                    <span><i className={props.icono}></i></span>
                </div>
                <div className="proyectosCarta-contenido">
                    <h3 className="proyectosCarta-contenido_titulo">{props.nombre}</h3>
                    <p className="proyectosCarta-contenido_texto">{props.descripcion}</p>
                </div>
            </div>
        </a>

    )
}