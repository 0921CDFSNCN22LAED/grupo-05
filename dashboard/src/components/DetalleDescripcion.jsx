import { checkPropTypes } from "prop-types";
import React from "react";

export default function DetalleDescripcion(props){

    if(props.tipo === 'vinos'){
        return <div>
            <p>Descripción: {props.info.descripcion}</p>
            <p>Año: {props.info.anio}</p>
            <p>Precio: ${props.info.precio}</p>
            <p>Bodega: {props.info.vinoBodega}</p>
            <p>Uva: {props.info.vinoUva}</p>
            <p>Categoria: {props.info.vinoCategoria}</p>
        </div>
    }
    return <div>
        <p>Email: {props.info.email}</p>
        <p>Tipo: {props.info.usuarioTipo}</p>
    </div>
}
