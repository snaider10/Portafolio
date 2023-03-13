import { Link } from "react-router-dom"

export const Enlace = (props) => {
    return(

        
        <a href= {props.link} className = "navegador-enlace" >
                <i className={props.icono}></i>
                {props.nombre}
        </a>
    )    
}