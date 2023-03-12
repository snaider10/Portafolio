import { useState } from "react"

export const HabilidadCarta = (props)=>{
    const [activo,setActivo] = useState(false)
    const mouseEncima = () =>{
        setActivo(true)
    }
    const mouseNoEncima = () => {
        setActivo(false)
    }
    //habilidadesContenedor-item
    return(
        <div 
        className="habilidadesContenedor-item"
        onMouseOver={mouseEncima}    onMouseOut={mouseNoEncima} 
        >
            <label className={activo? 'iconoHabilidadActivo' : 'iconoHabilidad'}>
                <i className={props.icono}></i>
            </label>
            <label className={activo? 'textoHabilidadActivo' :'textoHabilidad'}>
                {props.nombre}
            </label>
            
        </div>
    )
}