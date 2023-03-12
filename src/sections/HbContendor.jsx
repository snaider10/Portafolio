import webDeveloper from "../images/Data Arranging_Flatline.svg";
import { habilidades } from "../data/habilidades";
import { HabilidadCarta } from "../components/HabilidadCarta";
import { CiStar} from "react-icons/ci";
import { useState, useEffect } from "react";
export const Hbcontenedor = () =>{
    const [activo,setActivo] = useState(false)
    const mouseEncima = () =>{
        setActivo(true)
    }
    const mouseNoEncima = () => {
        setActivo(false)
    }
    const [posicionHabilidad, setposicionHabilidad] = useState(0);
    
    function incrementarPosicion(){
        if (posicionHabilidad === habilidades.length-1) {
            setposicionHabilidad(0)
        } else {
            const nuevaPosicion = posicionHabilidad+1
            setposicionHabilidad(nuevaPosicion)
        }
    }
    
    useEffect(() => {
      setTimeout(incrementarPosicion, 5000);
    });


    return(
        <>
        
        <div className ="habilidades" onMouseOver={mouseEncima}    onMouseOut={mouseNoEncima}>
            <div className="habilidadesInicio">
                <img className="habilidades-imagen"  src={webDeveloper}/>
            
                <div>
                    <div className="habilidadesTl">
                        <CiStar
                            className={activo? 'iconoFragmentoActivo':'iconoFragmentoDesactivado'}
                            id='iconoFragmento'
                        />
                        <h1 className={activo? 'tituloFragmentoActivo':''} id='habilidades-titulo'>Habilidades</h1>
                        
                    </div>
                    
                    <div className="habilidadesCarta">
                        <div className="habilidadCarta">
                            <span className="habilidadCarta-icono"><i className= {habilidades[posicionHabilidad].icono}></i></span>
                         </div>
                     </div>
            </div>
            </div>
            
            
            <div className="habilidadesContenedor">
                {
                    habilidades.map((habilidad)=>(
                        <HabilidadCarta
                            key={habilidad.id}
                            icono={habilidad.icono}
                            nombre={habilidad.nombre}
                        ></HabilidadCarta>
                        ))
                }
            </div>
        </div>

        
        </>
    )
}