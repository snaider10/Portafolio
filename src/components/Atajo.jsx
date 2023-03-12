
export const Atajo = (props) => {
    return(
        <a className="atajos-link" href= {props.link}>
            <label><i className= {props.icono}></i></label>
        </a>
    )    
}