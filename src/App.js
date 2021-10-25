import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tabla from './tablaPeriodica.js'
import Elemento from './Elemento.js'
import styled from 'styled-components';
import './styles/Elemento.css'
import Modal from './Modal.js';
const Tabla = () => {
    const [estadoModal1, setEstadoModal1] = useState(false);
    const [estadoModal2, setEstadoModal2] = useState(false);
    const [estadoModal3, setEstadoModal3] = useState(false);
    const [estadoModal4, setEstadoModal4] = useState(false);
    const [estadoModal5, setEstadoModal5] = useState(false);
    const [estadoModal6, setEstadoModal6] = useState(false);
    const [estadoModal7, setEstadoModal7] = useState(false);
    const [estadoModal8, setEstadoModal8] = useState(false);
    const [estadoModal9, setEstadoModal9] = useState(false);
    const [estadoModal10, setEstadoModal10] = useState(false);
    const [estadoModal11, setEstadoModal11] = useState(false);
    const [estadoModal12, setEstadoModal12] = useState(false);
    const [estadoModal13, setEstadoModal13] = useState(false);
    const [estadoModal14, setEstadoModal14] = useState(false);
    const [estadoModal15, setEstadoModal15] = useState(false);
    const [estadoModal16, setEstadoModal16] = useState(false);
    const [estadoModal17, setEstadoModal17] = useState(false);
    const [estadoModal18, setEstadoModal18] = useState(false);
    const [estadoModal19, setEstadoModal19] = useState(false);
    const [estadoModal20, setEstadoModal20] = useState(false);
    const [estadoModal21, setEstadoModal21] = useState(false);
    const [estadoModal22, setEstadoModal22] = useState(false);
    const [estadoModal23, setEstadoModal23] = useState(false);
    const [estadoModal24, setEstadoModal24] = useState(false);
    const [estadoModal25, setEstadoModal25] = useState(false);
    const [estadoModal26, setEstadoModal26] = useState(false);
    const [estadoModal27, setEstadoModal27] = useState(false);
    const [estadoModal28, setEstadoModal28] = useState(false);
    const [estadoModal29, setEstadoModal29] = useState(false);
    const [estadoModal30, setEstadoModal30] = useState(false);
    const [estadoModal31, setEstadoModal31] = useState(false);
    const [estadoModal32, setEstadoModal32] = useState(false);
    const [estadoModal33, setEstadoModal33] = useState(false);
    const [estadoModal34, setEstadoModal34] = useState(false);
    const [estadoModal35, setEstadoModal35] = useState(false);
    const [estadoModal36, setEstadoModal36] = useState(false);
    const [estadoModal37, setEstadoModal37] = useState(false);
    const [estadoModal38, setEstadoModal38] = useState(false);
    const [estadoModal39, setEstadoModal39] = useState(false);
    const [estadoModal40, setEstadoModal40] = useState(false);
    const [estadoModal41, setEstadoModal41] = useState(false);
    const [estadoModal42, setEstadoModal42] = useState(false);
    const [estadoModal43, setEstadoModal43] = useState(false);
    const [estadoModal44, setEstadoModal44] = useState(false);
    const [estadoModal45, setEstadoModal45] = useState(false);
    const [estadoModal46, setEstadoModal46] = useState(false);
    const [estadoModal47, setEstadoModal47] = useState(false);
    const [estadoModal48, setEstadoModal48] = useState(false);
    const [estadoModal49, setEstadoModal49] = useState(false);
    const [estadoModal50, setEstadoModal50] = useState(false);
    const [estadoModal51, setEstadoModal51] = useState(false);
    const [estadoModal52, setEstadoModal52] = useState(false);
    const [estadoModal53, setEstadoModal53] = useState(false);
    const [estadoModal54, setEstadoModal54] = useState(false);
    const [estadoModal55, setEstadoModal55] = useState(false);
    const [estadoModal56, setEstadoModal56] = useState(false);
    const [estadoModal57, setEstadoModal57] = useState(false);
    const [estadoModal58, setEstadoModal58] = useState(false);
    const [estadoModal59, setEstadoModal59] = useState(false);
    const [estadoModal60, setEstadoModal60] = useState(false);
    const [estadoModal61, setEstadoModal61] = useState(false);
    const [estadoModal62, setEstadoModal62] = useState(false);
    const [estadoModal63, setEstadoModal63] = useState(false);
    const [estadoModal64, setEstadoModal64] = useState(false);
    const [estadoModal65, setEstadoModal65] = useState(false);
    const [estadoModal66, setEstadoModal66] = useState(false);
    const [estadoModal67, setEstadoModal67] = useState(false);
    const [estadoModal68, setEstadoModal68] = useState(false);
    const [estadoModal69, setEstadoModal69] = useState(false);
    const [estadoModal70, setEstadoModal70] = useState(false);
    const [estadoModal71, setEstadoModal71] = useState(false);
    const [estadoModal72, setEstadoModal72] = useState(false);
    const [estadoModal73, setEstadoModal73] = useState(false);
    const [estadoModal74, setEstadoModal74] = useState(false);
    const [estadoModal75, setEstadoModal75] = useState(false);
    const [estadoModal76, setEstadoModal76] = useState(false);
    const [estadoModal77, setEstadoModal77] = useState(false);
    const [estadoModal78, setEstadoModal78] = useState(false);
    const [estadoModal79, setEstadoModal79] = useState(false);
    const [estadoModal80, setEstadoModal80] = useState(false);
    const [estadoModal81, setEstadoModal81] = useState(false);
    const [estadoModal82, setEstadoModal82] = useState(false);
    const [estadoModal83, setEstadoModal83] = useState(false);
    const [estadoModal84, setEstadoModal84] = useState(false);
    const [estadoModal85, setEstadoModal85] = useState(false);
    const [estadoModal86, setEstadoModal86] = useState(false);
    const [estadoModal87, setEstadoModal87] = useState(false);
    const [estadoModal88, setEstadoModal88] = useState(false);
    const [estadoModal89, setEstadoModal89] = useState(false);
    const [estadoModal90, setEstadoModal90] = useState(false);
    const [estadoModal91, setEstadoModal91] = useState(false);
    const [estadoModal92, setEstadoModal92] = useState(false);
    const [estadoModal93, setEstadoModal93] = useState(false);
    const [estadoModal94, setEstadoModal94] = useState(false);
    const [estadoModal95, setEstadoModal95] = useState(false);
    const [estadoModal96, setEstadoModal96] = useState(false);
    const [estadoModal97, setEstadoModal97] = useState(false);
    const [estadoModal98, setEstadoModal98] = useState(false);
    const [estadoModal99, setEstadoModal99] = useState(false);
    const [estadoModal100, setEstadoModal100] = useState(false);
    const [estadoModal101, setEstadoModal101] = useState(false);
    const [estadoModal102, setEstadoModal102] = useState(false);
    const [estadoModal103, setEstadoModal103] = useState(false);
    const [estadoModal104, setEstadoModal104] = useState(false);
    const [estadoModal105, setEstadoModal105] = useState(false);
    const [estadoModal106, setEstadoModal106] = useState(false);
    const [estadoModal107, setEstadoModal107] = useState(false);
    const [estadoModal108, setEstadoModal108] = useState(false);
    const [estadoModal109, setEstadoModal109] = useState(false);
    const [estadoModal110, setEstadoModal110] = useState(false);
    const [estadoModal111, setEstadoModal111] = useState(false);
    const [estadoModal112, setEstadoModal112] = useState(false);
    const [estadoModal113, setEstadoModal113] = useState(false);
    const [estadoModal114, setEstadoModal114] = useState(false);
    const [estadoModal115, setEstadoModal115] = useState(false);
    const [estadoModal116, setEstadoModal116] = useState(false);
    const [estadoModal117, setEstadoModal117] = useState(false);
    const [estadoModal118, setEstadoModal118] = useState(false);
    return (
        <div className="containerReact">
            <Modal 
                elemento={tabla.Metales.actinidos.Ac}
                estado={estadoModal1}
                setEstado={setEstadoModal1}>
                
            </Modal>
            <Modal 
                elemento={tabla.Metales.actinidos.Th}
                estado={estadoModal2}
                setEstado={setEstadoModal2}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Pa}
                estado={estadoModal3}
                setEstado={setEstadoModal3}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.U}
                estado={estadoModal4}
                setEstado={setEstadoModal4}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Np}
                estado={estadoModal5}
                setEstado={setEstadoModal5}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Pu}
                estado={estadoModal6}
                setEstado={setEstadoModal6}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Am}
                estado={estadoModal7}
                setEstado={setEstadoModal7}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Cm}
                estado={estadoModal8}
                setEstado={setEstadoModal8}>
                    </Modal>
            <Modal elemento={tabla.Metales.actinidos.Bk}
                estado={estadoModal9}
                setEstado={setEstadoModal9}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Cf}
                estado={estadoModal10}
                setEstado={setEstadoModal10}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Es}
                estado={estadoModal11}
                setEstado={setEstadoModal11}>       
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Fm}
                estado={estadoModal12}
                setEstado={setEstadoModal12}>
            </Modal>
            <Modal elemento={tabla.Metales.actinidos.Md}
                estado={estadoModal13}
                setEstado={setEstadoModal13}>
                    </Modal>
            <Modal elemento={tabla.Metales.actinidos.No}
                estado={estadoModal14}
                setEstado={setEstadoModal14}>
                    </Modal>
            <Modal elemento={tabla.Metales.actinidos.Lr}
                estado={estadoModal15}
                setEstado={setEstadoModal15}>
                    </Modal>
            <Modal elemento={tabla.Metales.MetalesPostransicionales.Al}
                estado={estadoModal16}
                setEstado={setEstadoModal16}>
            </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Ga}
                estado={estadoModal17}
                setEstado={setEstadoModal17}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Bi}
                estado={estadoModal18}
                setEstado={setEstadoModal18}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Fl}
                estado={estadoModal19}
                setEstado={setEstadoModal19}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.In}
                estado={estadoModal20}
                setEstado={setEstadoModal20}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Lv}
                estado={estadoModal21}
                setEstado={setEstadoModal21}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Mc}
                estado={estadoModal22}
                setEstado={setEstadoModal22}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Nh}
                estado={estadoModal23}
                setEstado={setEstadoModal23}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Pb}
                estado={estadoModal24}
                setEstado={setEstadoModal24}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Po}
                estado={estadoModal25}
                setEstado={setEstadoModal25}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Sn}
                estado={estadoModal26}
                setEstado={setEstadoModal26}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesPostransicionales.Tl}
                estado={estadoModal27}
                setEstado={setEstadoModal27}>
                    </Modal>
                    <Modal elemento={tabla.Metales.Lantánidos.La}
                estado={estadoModal28}
                setEstado={setEstadoModal28}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Ce}
                estado={estadoModal29}
                setEstado={setEstadoModal29}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Pr}
                estado={estadoModal30}
                setEstado={setEstadoModal30}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Nd}
                estado={estadoModal31}
                setEstado={setEstadoModal31}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Pm}
                estado={estadoModal32}
                setEstado={setEstadoModal32}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Sm}
                estado={estadoModal33}
                setEstado={setEstadoModal33}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Eu}
                estado={estadoModal34}
                setEstado={setEstadoModal34}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Gd}
                estado={estadoModal35}
                setEstado={setEstadoModal35}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Tb}
                estado={estadoModal36}
                setEstado={setEstadoModal36}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Dy}
                estado={estadoModal37}
                setEstado={setEstadoModal37}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Ho}
                estado={estadoModal38}
                setEstado={setEstadoModal38}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Er}
                estado={estadoModal39}
                setEstado={setEstadoModal39}>
                    </Modal> 
                    <Modal elemento={tabla.Metales.Lantánidos.Tm}
                estado={estadoModal40}
                setEstado={setEstadoModal40}>
                    </Modal>
                    <Modal elemento={tabla.Metales.Lantánidos.Yb}
                estado={estadoModal41}
                setEstado={setEstadoModal41}>
                    </Modal>
                    <Modal elemento={tabla.Metales.Lantánidos.Lu}
                estado={estadoModal42}
                setEstado={setEstadoModal42}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinos.Li}
                estado={estadoModal43}
                setEstado={setEstadoModal43}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinos.Na}
                estado={estadoModal44}
                setEstado={setEstadoModal44}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinos.K}
                estado={estadoModal45}
                setEstado={setEstadoModal45}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinos.Rb}
                estado={estadoModal46}
                setEstado={setEstadoModal46}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinos.Cs}
                estado={estadoModal47}
                setEstado={setEstadoModal47}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinos.Fr}
                estado={estadoModal48}
                setEstado={setEstadoModal48}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinotérreos.Be}
                estado={estadoModal49}
                setEstado={setEstadoModal49}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinotérreos.Mg}
                estado={estadoModal50}
                setEstado={setEstadoModal50}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinotérreos.Ca}
                estado={estadoModal51}
                setEstado={setEstadoModal51}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinotérreos.Sr}
                estado={estadoModal52}
                setEstado={setEstadoModal52}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinotérreos.Ba}
                estado={estadoModal53}
                setEstado={setEstadoModal53}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesAlcalinotérreos.Ra}
                estado={estadoModal54}
                setEstado={setEstadoModal54}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesDeTransicion.Sc}
                estado={estadoModal55}
                setEstado={setEstadoModal55}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesDeTransicion.Ti}
                estado={estadoModal56}
                setEstado={setEstadoModal56}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesDeTransicion.V}
                estado={estadoModal57}
                setEstado={setEstadoModal57}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesDeTransicion.Cr}
                estado={estadoModal58}
                setEstado={setEstadoModal58}>
                    </Modal>
                    <Modal elemento={tabla.Metales.MetalesDeTransicion.Mn}
                estado={estadoModal59}
                setEstado={setEstadoModal59}></Modal>
                <Modal
                    elemento={tabla.Metales.MetalesDeTransicion.Fe}
                    estado={estadoModal60}
                    setEstado={setEstadoModal60}></Modal>
                            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Co}
                estado={estadoModal61}
                setEstado={setEstadoModal61}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Ni}
                estado={estadoModal62}
                setEstado={setEstadoModal62}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Cu}
                estado={estadoModal63}
                setEstado={setEstadoModal63}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Zn}
                estado={estadoModal64}
                setEstado={setEstadoModal64}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Y}
                estado={estadoModal65}
                setEstado={setEstadoModal65}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Zr}
                estado={estadoModal66}
                setEstado={setEstadoModal66}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Nb}
                estado={estadoModal67}
                setEstado={setEstadoModal67}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Mo}
                estado={estadoModal68}
                setEstado={setEstadoModal68}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Tc}
                estado={estadoModal69}
                setEstado={setEstadoModal69}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Ru}
                estado={estadoModal70}
                setEstado={setEstadoModal70}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Rh}
                estado={estadoModal71}
                setEstado={setEstadoModal71}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Pd}
                estado={estadoModal72}
                setEstado={setEstadoModal72}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Ag}
                estado={estadoModal73}
                setEstado={setEstadoModal73}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Cd}
                estado={estadoModal74}
                setEstado={setEstadoModal74}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Hf}
                estado={estadoModal75}
                setEstado={setEstadoModal75}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Ta}
                estado={estadoModal76}
                setEstado={setEstadoModal76}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.W}
                estado={estadoModal77}
                setEstado={setEstadoModal77}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Re}
                estado={estadoModal78}
                setEstado={setEstadoModal78}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Os}
                estado={estadoModal79}
                setEstado={setEstadoModal79}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Ir}
                estado={estadoModal80}
                setEstado={setEstadoModal80}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Pt}
                estado={estadoModal81}
                setEstado={setEstadoModal81}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Au}
                estado={estadoModal82}
                setEstado={setEstadoModal82}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Hg}
                estado={estadoModal83}
                setEstado={setEstadoModal83}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Rf}
                estado={estadoModal84}
                setEstado={setEstadoModal84}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Db}
                estado={estadoModal85}
                setEstado={setEstadoModal85}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Sg}
                estado={estadoModal86}
                setEstado={setEstadoModal86}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Bh}
                estado={estadoModal87}
                setEstado={setEstadoModal87}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Hs}
                estado={estadoModal88}
                setEstado={setEstadoModal88}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Mt}
                estado={estadoModal89}
                setEstado={setEstadoModal89}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Ds}
                estado={estadoModal90}
                setEstado={setEstadoModal90}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Rg}
                estado={estadoModal91}
                setEstado={setEstadoModal91}>

            </Modal>
            <Modal
                elemento={tabla.Metales.MetalesDeTransicion.Cn}
                estado={estadoModal92}
                setEstado={setEstadoModal92}>

            </Modal>
            <Modal
                elemento={tabla.Metales.Metaloides.B}
                estado={estadoModal93}
                setEstado={setEstadoModal93}>

            </Modal>
            <Modal
                elemento={tabla.Metales.Metaloides.Si}
                estado={estadoModal94}
                setEstado={setEstadoModal94}>

            </Modal>
            <Modal
                elemento={tabla.Metales.Metaloides.Ge}
                estado={estadoModal95}
                setEstado={setEstadoModal95}>

            </Modal>
            <Modal
                elemento={tabla.Metales.Metaloides.As}
                estado={estadoModal96}
                setEstado={setEstadoModal96}>

            </Modal>
            <Modal
                elemento={tabla.Metales.Metaloides.Sb}
                estado={estadoModal97}
                setEstado={setEstadoModal97}>

            </Modal>
            <Modal
                elemento={tabla.Metales.Metaloides.Te}
                estado={estadoModal98}
                setEstado={setEstadoModal98}>

            </Modal>
            <Modal
                elemento={tabla.Metales.Metaloides.At}
                estado={estadoModal99}
                setEstado={setEstadoModal99}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.Halogenos.F}
                estado={estadoModal100}
                setEstado={setEstadoModal100}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.Halogenos.Cl}
                estado={estadoModal101}
                setEstado={setEstadoModal101}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.Halogenos.Br}
                estado={estadoModal102}
                setEstado={setEstadoModal102}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.Halogenos.I}
                estado={estadoModal103}
                setEstado={setEstadoModal103}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.Halogenos.Ts}
                estado={estadoModal104}
                setEstado={setEstadoModal104}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.gasesNobles.He}
                estado={estadoModal105}
                setEstado={setEstadoModal105}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.gasesNobles.Ne}
                estado={estadoModal106}
                setEstado={setEstadoModal106}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.gasesNobles.Ar}
                estado={estadoModal107}
                setEstado={setEstadoModal107}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.gasesNobles.Kr}
                estado={estadoModal108}
                setEstado={setEstadoModal108}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.gasesNobles.Xe}
                estado={estadoModal109}
                setEstado={setEstadoModal109}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.gasesNobles.Rn}
                estado={estadoModal110}
                setEstado={setEstadoModal110}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.gasesNobles.Og}
                estado={estadoModal111}
                setEstado={setEstadoModal111}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.noMetales.H}
                estado={estadoModal112}
                setEstado={setEstadoModal112}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.noMetales.C}
                estado={estadoModal113}
                setEstado={setEstadoModal113}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.noMetales.N}
                estado={estadoModal114}
                setEstado={setEstadoModal114}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.noMetales.O}
                estado={estadoModal115}
                setEstado={setEstadoModal115}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.noMetales.P}
                estado={estadoModal116}
                setEstado={setEstadoModal116}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.noMetales.S}
                estado={estadoModal117}
                setEstado={setEstadoModal117}>

            </Modal>
            <Modal
                elemento={tabla.noMetales.noMetales.Se}
                estado={estadoModal118}
                setEstado={setEstadoModal118}>

            </Modal>
            <div className="container">
            <Elemento 
                estado ={estadoModal1}
                setEstado={setEstadoModal1}
                props={tabla.Metales.actinidos.Ac}/>
            <Elemento
            estado ={estadoModal2}
            setEstado={setEstadoModal2} 
            props={tabla.Metales.actinidos.Th}/>
            <Elemento 
            estado ={estadoModal3}
            setEstado={setEstadoModal3} 
            props={tabla.Metales.actinidos.Pa}/>
<Elemento 
            estado ={estadoModal1}
            setEstado={setEstadoModal1}
            props={tabla.Metales.actinidos.Ac}/>
            <Elemento 
            estado ={estadoModal2}
            setEstado={setEstadoModal2} 
            props={tabla.Metales.actinidos.Th}/>
            <Elemento 
            estado ={estadoModal3}
            setEstado={setEstadoModal3} 
            props={tabla.Metales.actinidos.Pa}/>
            <Elemento 
            estado ={estadoModal4}
            setEstado={setEstadoModal4} 
            props={tabla.Metales.actinidos.U}/>
            <Elemento 
            estado ={estadoModal5}
            setEstado={setEstadoModal5} 
            props={tabla.Metales.actinidos.Np}/>
            <Elemento 
            estado ={estadoModal6}
            setEstado={setEstadoModal6} 
            props={tabla.Metales.actinidos.Pu}/>
            <Elemento
            estado ={estadoModal7}
            setEstado={setEstadoModal7} 
            props={tabla.Metales.actinidos.Am}/>
            <Elemento 
            estado ={estadoModal8}
            setEstado={setEstadoModal8} 
            props={tabla.Metales.actinidos.Cm}/>
            <Elemento
            estado ={estadoModal9}
            setEstado={setEstadoModal9} 
            props={tabla.Metales.actinidos.Bk}/>
            <Elemento 
            estado ={estadoModal10}
            setEstado={setEstadoModal10}
            props={tabla.Metales.actinidos.Cf}/>
            <Elemento
            estado ={estadoModal11}
            setEstado={setEstadoModal11}
            props={tabla.Metales.actinidos.Es}/>
            <Elemento
            estado ={estadoModal12}
            setEstado={setEstadoModal12}
            props={tabla.Metales.actinidos.Fm}/>
            <Elemento
            estado ={estadoModal13}
            setEstado={setEstadoModal13}
            props={tabla.Metales.actinidos.Md}/>
            <Elemento 
            estado ={estadoModal14}
            setEstado={setEstadoModal14}
            props={tabla.Metales.actinidos.No}/>
            <Elemento 
            estado ={estadoModal15}
            setEstado={setEstadoModal15}
            props={tabla.Metales.actinidos.Lr}/>
            <Elemento
            estado ={estadoModal16}
            setEstado={setEstadoModal16}
            props={tabla.Metales.MetalesPostransicionales.Al}/>
            <Elemento 
            estado ={estadoModal17}
            setEstado={setEstadoModal17}
            props={tabla.Metales.MetalesPostransicionales.Ga}/>
            <Elemento
            estado ={estadoModal18}
            setEstado={setEstadoModal18}
            props={tabla.Metales.MetalesPostransicionales.Bi}/>
            <Elemento 
            estado ={estadoModal19}
            setEstado={setEstadoModal19}
            props={tabla.Metales.MetalesPostransicionales.Fl}/>
            <Elemento 
            estado ={estadoModal20}
            setEstado={setEstadoModal20}
            props={tabla.Metales.MetalesPostransicionales.In}/>
            <Elemento 
            estado ={estadoModal21}
            setEstado={setEstadoModal21}
            props={tabla.Metales.MetalesPostransicionales.Lv}/>
            <Elemento 
            estado ={estadoModal22}
            setEstado={setEstadoModal22}
            props={tabla.Metales.MetalesPostransicionales.Mc}/>
            <Elemento 
            estado ={estadoModal23}
            setEstado={setEstadoModal23}
            props={tabla.Metales.MetalesPostransicionales.Nh}/>
            <Elemento 
            estado ={estadoModal24}
            setEstado={setEstadoModal24}
            props={tabla.Metales.MetalesPostransicionales.Pb}/>
            <Elemento 
            estado ={estadoModal25}
            setEstado={setEstadoModal25}
            props={tabla.Metales.MetalesPostransicionales.Po}/>
            <Elemento 
            estado ={estadoModal26}
            setEstado={setEstadoModal26}
            props={tabla.Metales.MetalesPostransicionales.Sn}/>
            <Elemento 
            estado ={estadoModal27}
            setEstado={setEstadoModal27}
            props={tabla.Metales.MetalesPostransicionales.Tl}/>
            <Elemento 
            estado ={estadoModal28}
            setEstado={setEstadoModal28}
            props={tabla.Metales.Lantánidos.La}/>
            <Elemento 
            estado ={estadoModal29}
            setEstado={setEstadoModal29}
            props={tabla.Metales.Lantánidos.Ce}/>
            <Elemento 
            estado ={estadoModal30}
            setEstado={setEstadoModal30}
            props={tabla.Metales.Lantánidos.Pr}/>
            <Elemento 
            estado ={estadoModal31}
            setEstado={setEstadoModal31}
            props={tabla.Metales.Lantánidos.Nd}/>
            <Elemento 
            estado ={estadoModal32}
            setEstado={setEstadoModal32}
            props={tabla.Metales.Lantánidos.Pm}/>
            <Elemento 
            estado ={estadoModal33}
            setEstado={setEstadoModal33}
            props={tabla.Metales.Lantánidos.Sm}/>
            <Elemento 
            estado ={estadoModal34}
            setEstado={setEstadoModal34}
            props={tabla.Metales.Lantánidos.Eu}/>
            <Elemento 
            estado ={estadoModal35}
            setEstado={setEstadoModal35}
            props={tabla.Metales.Lantánidos.Gd}/>
            <Elemento 
            estado ={estadoModal36}
            setEstado={setEstadoModal36}
            props={tabla.Metales.Lantánidos.Tb}/>
            <Elemento 
            estado ={estadoModal37}
            setEstado={setEstadoModal37}
            props={tabla.Metales.Lantánidos.Dy}/>
            <Elemento 
            estado ={estadoModal38}
            setEstado={setEstadoModal38}
            props={tabla.Metales.Lantánidos.Ho}/>
            <Elemento 
            estado ={estadoModal39}
            setEstado={setEstadoModal39}
            props={tabla.Metales.Lantánidos.Er}/>
            <Elemento 
            estado ={estadoModal40}
            setEstado={setEstadoModal40}
            props={tabla.Metales.Lantánidos.Tm}/>
            <Elemento 
            estado ={estadoModal41}
            setEstado={setEstadoModal41}
            props={tabla.Metales.Lantánidos.Yb}/>
            <Elemento 
            estado ={estadoModal42}
            setEstado={setEstadoModal42}
            props={tabla.Metales.Lantánidos.Lu}/>
            <Elemento 
            estado ={estadoModal43}
            setEstado={setEstadoModal43}
            props={tabla.Metales.MetalesAlcalinos.Li}/>
            <Elemento 
            estado ={estadoModal44}
            setEstado={setEstadoModal44}
            props={tabla.Metales.MetalesAlcalinos.Na}/>
            <Elemento 
            estado ={estadoModal45}
            setEstado={setEstadoModal45}
            props={tabla.Metales.MetalesAlcalinos.K}/>
            <Elemento 
            estado ={estadoModal46}
            setEstado={setEstadoModal46}
            props={tabla.Metales.MetalesAlcalinos.Rb}/>
            <Elemento 
            estado ={estadoModal47}
            setEstado={setEstadoModal47}
            props={tabla.Metales.MetalesAlcalinos.Cs}/>
            <Elemento 
            estado ={estadoModal48}
            setEstado={setEstadoModal48}
            props={tabla.Metales.MetalesAlcalinos.Fr}/>
            <Elemento 
            estado ={estadoModal49}
            setEstado={setEstadoModal49}
            props={tabla.Metales.MetalesAlcalinotérreos.Be}/>
            <Elemento 
            estado ={estadoModal50}
            setEstado={setEstadoModal50}
            props={tabla.Metales.MetalesAlcalinotérreos.Mg}/>
            <Elemento 
            estado ={estadoModal51}
            setEstado={setEstadoModal51}
            props={tabla.Metales.MetalesAlcalinotérreos.Ca}/>
            <Elemento 
            estado ={estadoModal52}
            setEstado={setEstadoModal52}
            props={tabla.Metales.MetalesAlcalinotérreos.Sr}/>
            <Elemento 
            estado ={estadoModal53}
            setEstado={setEstadoModal53}
            props={tabla.Metales.MetalesAlcalinotérreos.Ba}/>
            <Elemento 
            estado ={estadoModal54}
            setEstado={setEstadoModal54}
            props={tabla.Metales.MetalesAlcalinotérreos.Ra}/>
            <Elemento 
            estado ={estadoModal55}
            setEstado={setEstadoModal55}
            props={tabla.Metales.MetalesDeTransicion.Sc}/>
            <Elemento 
            estado ={estadoModal56}
            setEstado={setEstadoModal56}
            props={tabla.Metales.MetalesDeTransicion.Ti}/>
            <Elemento 
            estado ={estadoModal57}
            setEstado={setEstadoModal57}
            props={tabla.Metales.MetalesDeTransicion.V}/>
            <Elemento 
            estado ={estadoModal58}
            setEstado={setEstadoModal58}
            props={tabla.Metales.MetalesDeTransicion.Cr}/>
            <Elemento 
            estado ={estadoModal59}
            setEstado={setEstadoModal59}
            props={tabla.Metales.MetalesDeTransicion.Mn}/>
            <Elemento 
            estado ={estadoModal60}
            setEstado={setEstadoModal60}
            props={tabla.Metales.MetalesDeTransicion.Fe}/>
            <Elemento
            estado ={estadoModal61}
                setEstado={setEstadoModal61}
            props={tabla.Metales.MetalesDeTransicion.Co}/>
            <Elemento 
            estado ={estadoModal62}
                setEstado={setEstadoModal62}
            props={tabla.Metales.MetalesDeTransicion.Ni}/>
            <Elemento 
            estado ={estadoModal63}
                setEstado={setEstadoModal63}
            props={tabla.Metales.MetalesDeTransicion.Cu}/>
            <Elemento 
            estado ={estadoModal64}
                setEstado={setEstadoModal64}
            props={tabla.Metales.MetalesDeTransicion.Zn}/>
            <Elemento 
            estado ={estadoModal65}
                setEstado={setEstadoModal65}
            props={tabla.Metales.MetalesDeTransicion.Y}/>
            <Elemento
            estado ={estadoModal66}
                setEstado={setEstadoModal66}
            props={tabla.Metales.MetalesDeTransicion.Zr}/>
            <Elemento 
            estado ={estadoModal67}
                setEstado={setEstadoModal67}
            props={tabla.Metales.MetalesDeTransicion.Nb}/>
            <Elemento
            estado ={estadoModal68}
                setEstado={setEstadoModal68}
            props={tabla.Metales.MetalesDeTransicion.Mo}/>
            <Elemento 
            estado ={estadoModal69}
                setEstado={setEstadoModal69}
            props={tabla.Metales.MetalesDeTransicion.Tc}/>
            <Elemento 
            estado ={estadoModal70}
                setEstado={setEstadoModal70}
            props={tabla.Metales.MetalesDeTransicion.Ru}/>
            <Elemento 
            estado ={estadoModal71}
                setEstado={setEstadoModal71}
            props={tabla.Metales.MetalesDeTransicion.Rh}/>
            <Elemento 
            estado ={estadoModal72}
                setEstado={setEstadoModal72}
            props={tabla.Metales.MetalesDeTransicion.Pd}/>
            <Elemento 
            estado ={estadoModal73}
                setEstado={setEstadoModal73}
            props={tabla.Metales.MetalesDeTransicion.Ag}/>
            <Elemento 
            estado ={estadoModal74}
                setEstado={setEstadoModal74}
            props={tabla.Metales.MetalesDeTransicion.Cd}/>
            <Elemento 
            estado ={estadoModal75}
                setEstado={setEstadoModal75}
            props={tabla.Metales.MetalesDeTransicion.Hf}/>
            <Elemento
            estado ={estadoModal76}
                setEstado={setEstadoModal76}
            props={tabla.Metales.MetalesDeTransicion.Ta}/>
            <Elemento 
            estado ={estadoModal77}
                setEstado={setEstadoModal77}
            props={tabla.Metales.MetalesDeTransicion.W}/>
            <Elemento
            estado ={estadoModal78}
                setEstado={setEstadoModal78}
            props={tabla.Metales.MetalesDeTransicion.Re}/>
            <Elemento
            estado ={estadoModal79}
                setEstado={setEstadoModal79}
            props={tabla.Metales.MetalesDeTransicion.Os}/>
            <Elemento
            estado ={estadoModal80}
                setEstado={setEstadoModal80}
            props={tabla.Metales.MetalesDeTransicion.Ir}/>
            <Elemento
            estado ={estadoModal81}
                setEstado={setEstadoModal81}
            props={tabla.Metales.MetalesDeTransicion.Pt}/>
            <Elemento 
            estado ={estadoModal82}
                setEstado={setEstadoModal82}
            props={tabla.Metales.MetalesDeTransicion.Au}/>
            <Elemento 
            estado ={estadoModal83}
                setEstado={setEstadoModal83}
            props={tabla.Metales.MetalesDeTransicion.Hg}/>
            <Elemento
            estado ={estadoModal84}
                setEstado={setEstadoModal84}
            props={tabla.Metales.MetalesDeTransicion.Rf}/>
            <Elemento 
            estado ={estadoModal85}
                setEstado={setEstadoModal85}
            props={tabla.Metales.MetalesDeTransicion.Db}/>
            <Elemento 
            estado ={estadoModal86}
                setEstado={setEstadoModal86}
            props={tabla.Metales.MetalesDeTransicion.Sg}/>
            <Elemento 
            estado ={estadoModal87}
                setEstado={setEstadoModal87}
            props={tabla.Metales.MetalesDeTransicion.Bh}/>
            <Elemento
            estado ={estadoModal88}
                setEstado={setEstadoModal88}
            props={tabla.Metales.MetalesDeTransicion.Hs}/>
            <Elemento 
            estado ={estadoModal89}
                setEstado={setEstadoModal89}
            props={tabla.Metales.MetalesDeTransicion.Mt}/>
            <Elemento 
            estado ={estadoModal90}
                setEstado={setEstadoModal90}
            props={tabla.Metales.MetalesDeTransicion.Ds}/>
            <Elemento 
            estado ={estadoModal91}
                setEstado={setEstadoModal91}
            props={tabla.Metales.MetalesDeTransicion.Rg}/>
            <Elemento
            estado ={estadoModal92}
                setEstado={setEstadoModal92}
            props={tabla.Metales.MetalesDeTransicion.Cn}/>
            <Elemento 
            estado ={estadoModal93}
                setEstado={setEstadoModal93}
            props={tabla.Metales.Metaloides.B}/>
            <Elemento 
            estado ={estadoModal94}
                setEstado={setEstadoModal94}
            props={tabla.Metales.Metaloides.Si}/>
            <Elemento 
            estado ={estadoModal95}
                setEstado={setEstadoModal95}
            props={tabla.Metales.Metaloides.Ge}/>
            <Elemento
            estado ={estadoModal96}
                setEstado={setEstadoModal96}
            props={tabla.Metales.Metaloides.As}/>
            <Elemento 
            estado ={estadoModal97}
                setEstado={setEstadoModal97}
            props={tabla.Metales.Metaloides.Sb}/>
            <Elemento 
            estado ={estadoModal98}
                setEstado={setEstadoModal98}
            props={tabla.Metales.Metaloides.Te}/>
            <Elemento
            estado ={estadoModal99}
                setEstado={setEstadoModal99}
            props={tabla.Metales.Metaloides.At}/>
            <Elemento
            estado ={estadoModal100}
                setEstado={setEstadoModal100}
            props={tabla.noMetales.Halogenos.F}/>
            <Elemento 
            estado ={estadoModal101}
                setEstado={setEstadoModal101}
            props={tabla.noMetales.Halogenos.Cl}/>
            <Elemento 
            estado ={estadoModal102}
                setEstado={setEstadoModal102}
            props={tabla.noMetales.Halogenos.Br}/>
            <Elemento 
            estado ={estadoModal103}
                setEstado={setEstadoModal103}
            props={tabla.noMetales.Halogenos.I}/>
            <Elemento
            estado ={estadoModal104}
                setEstado={setEstadoModal104}
            props={tabla.noMetales.Halogenos.Ts}/>
            <Elemento 
            estado ={estadoModal105}
                setEstado={setEstadoModal105}
            props={tabla.noMetales.gasesNobles.He}/>
            <Elemento
            estado ={estadoModal106}
                setEstado={setEstadoModal106}
            props={tabla.noMetales.gasesNobles.Ne}/>
            <Elemento 
            estado ={estadoModal107}
                setEstado={setEstadoModal107}
            props={tabla.noMetales.gasesNobles.Ar}/>
            <Elemento 
            estado ={estadoModal108}
                setEstado={setEstadoModal108}
            props={tabla.noMetales.gasesNobles.Kr}/>
            <Elemento 
            estado ={estadoModal109}
                setEstado={setEstadoModal109}
            props={tabla.noMetales.gasesNobles.Xe}/>
            <Elemento 
            estado ={estadoModal110}
                setEstado={setEstadoModal110}
            props={tabla.noMetales.gasesNobles.Rn}/>
            <Elemento
            estado ={estadoModal111}
                setEstado={setEstadoModal111}
            props={tabla.noMetales.gasesNobles.Og}/>
            <Elemento
            estado ={estadoModal112}
                setEstado={setEstadoModal112}
            props={tabla.noMetales.noMetales.H}/>
            <Elemento 
            estado ={estadoModal113}
                setEstado={setEstadoModal113}
            props={tabla.noMetales.noMetales.C}/>
            <Elemento 
            estado ={estadoModal114}
                setEstado={setEstadoModal114}
            props={tabla.noMetales.noMetales.N}/>
            <Elemento
            estado ={estadoModal115}
                setEstado={setEstadoModal115}
            props={tabla.noMetales.noMetales.O}/>
            <Elemento 
            estado ={estadoModal116}
                setEstado={setEstadoModal116}
            props={tabla.noMetales.noMetales.P}/>
            <Elemento 
            estado ={estadoModal117}
                setEstado={setEstadoModal117}
            props={tabla.noMetales.noMetales.S}/>
            <Elemento 
            estado ={estadoModal118}
                setEstado={setEstadoModal118}
            props={tabla.noMetales.noMetales.Se}/>
            <div className="LantanidosStr elemento flex">Lantanidos</div>
            <div className="ActinidosStr elemento flex">Actinidos</div>
            </div>

        </div>
    );
};


Tabla.propTypes = {

};


export default Tabla;
