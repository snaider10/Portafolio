import { useState } from "react"
import { proyectos } from "../data/proyectos"
import { ProyectoCarta } from "../components/ProyectoCarta";
import { CiLaptop} from "react-icons/ci";

export const Prcontenedor = () =>{

    const [activo,setActivo] = useState(false)
    const mouseEncima = () =>{
        setActivo(true)
    }
    const mouseNoEncima = () => {
        setActivo(false)
    }

    return (
        <>
        
        <div className="proyectos" onMouseOver={mouseEncima}    onMouseOut={mouseNoEncima}>
            <div className="descripcionTl">
                <h1  className={activo? 'tituloFragmentoActivo':''}  id="proyectosTitulo">Proyectos</h1>
                <CiLaptop 
                    className={activo? 'iconoFragmentoActivo':'iconoFragmentoDesactivado'}
                    id='iconoFragmento'
                />
            </div>

            <div className="proyectosContenedor">
            {
                proyectos.map((proyecto)=>(
                    <ProyectoCarta
                        key={proyecto.id}
                        icono={proyecto.icono}
                        nombre={proyecto.nombre}
                        descripcion={proyecto.descripcion}
                        link={proyecto.link}
                    ></ProyectoCarta>
                ))
            }
            </div>

        </div>
        
        </>
        
    )
}