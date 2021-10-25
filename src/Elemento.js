import React from 'react'
import PropTypes from 'prop-types'
import "./styles/Elemento.css"
import './styles/normalize.css'
const Elemento = ({props, estado, setEstado}) => {
    console.log(`${props.grupo}`);
    return (
        <button onClick={() => setEstado(!estado) } className={'elemento a' + props.numeroAtomico +" " + props.grupo}>
            <p className="simbolo">{props.simbolo}</p>
            <p className="numeroAtomico">{props.numeroAtomico}</p>
            <p className="nombre">{props.nombre}</p>
            <p className="pesoAtomico">{props.pesoAtomico}</p>
        </button>
        
    );
}

Elemento.propTypes = {

}

export default Elemento;
