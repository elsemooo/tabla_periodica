import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import ElementoImg from './ElementoImg.js'

const Modal = ({props, elemento, estado, setEstado}) => {
    return (
        <>
        {estado &&
            <Overlay>
                <ContenedorModal>
                <EncabezadoModal>
                <FlexCenter>
                    {elemento.simbolo}
                </FlexCenter>
                <FlexCenter>
                    {elemento.nombre}
                </FlexCenter>
                <FlexCenter> 
                    {elemento.numeroAtomico}
                </FlexCenter>
                </EncabezadoModal>
                <CuerpoModal>
                    <ElementoImg props={elemento}/>
                    <Historia>
                    {elemento.historia}<br/>
                    </Historia>
                    <Especificaciones>
                    Peso atómico: {elemento.pesoAtomico} <br/>
                    Punto de fusión: {elemento.puntoDeFusion}<br/>
                    Punto de ebullición: {elemento.puntoDeEbullicion}<br/>
                    Fase a temperatura y presión estándar: {elemento.FaseATemperaturaYPresionEstándar}<br/>
                    Configuración electrónica: {elemento.ConfiguracionElectronica}<br/>
                    Estados de oxidación comunes: {elemento.EstadosDeOxidacionComunes}<br/>
                    Número de electrones de valencia: {elemento.NúmeroDeElectronesDeValencia}<br/>
                    grupo: {elemento.grupo}
                    </Especificaciones>
                </CuerpoModal> 
                <BotonCerrar onClick={() => setEstado(false) }>X</BotonCerrar>
                </ContenedorModal>
            </Overlay>}
        </>
    );
};
const Historia = styled.div`
    font-size: 12px;
    font-weight: 300;

`
const CuerpoModal = styled.div`
    display: grid;
    grid-template-columns: 110px 1fr 300px;
    font-weight:  700;
    grid-template-rows: 20vmax;
    font-size: 10px;
    grid-column-gap: 20px;
    align-items: center;
    justify-items: center;
    /* grid-template-rows: 110px, 200px, 200px; */
`
const Especificaciones = styled.div`
    font-size: 15px;
    font-weight: 600;
`
const ContenedorModal = styled.div`
    width: 80vw;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    min-height: 200px;
    padding:20px;
    background-color: #FFF;
`
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
`
const EncabezadoModal = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-evenly;
`
const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
`
const BotonCerrar = styled.div`
    position:absolute;
    top: 20px;
    right: 20px;
    transform: scaleY(0.8);
    font-size: 20px;
    cursor: pointer;
    width: 30px;
    height:30px;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover{
        background: #F2F2F2;
    }
`
Modal.propTypes = {

};


export default Modal;
