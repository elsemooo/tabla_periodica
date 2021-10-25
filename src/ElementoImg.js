import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './styles/normalize.css'
import './styles/ElementoImg.css'
const ElementoImg = ({props}) => {
    console.log(`${props.grupo}`);
    return (
        <Boton className={'elementoImg'}>
            <p className="simboloImg">{props.simbolo}</p>
            <p className="numeroAtomicoImg">{props.numeroAtomico}</p>
            <p className="nombreImg">{props.nombre}</p>
            <p className="pesoAtomicoImg">{props.pesoAtomico}</p>
        </Boton>
        
    );
}
const Boton = styled.div`
    
`
ElementoImg.propTypes = {

}

export default ElementoImg;
