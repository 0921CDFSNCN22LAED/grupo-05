import { checkPropTypes } from "prop-types";
import React from "react";
import detalle from "../css/detalle.css"

export default function DetalleDescripcion(props){

    if(props.tipo === 'vinos'){
        return <div>
            <p><div className="info">Descripción:</div> {props.info.descripcion}</p>
            <p><div className="info">Año:</div> {props.info.anio}</p>
            <p><div className="info">Precio:</div> ${props.info.precio}</p>
            <p><div className="info">Bodega:</div> {props.info.vinoBodega}</p>
            <p><div className="info">Uva:</div> {props.info.vinoUva}</p>
            <p><div className="info">Categoria:</div> {props.info.vinoCategoria}</p>
        </div>
    }
    return <div>
        <p><div className="info">Email:</div> {props.info.email}</p>
        <p><div className="info">Tipo:</div> {props.info.usuarioTipo}</p>
    </div>
}
