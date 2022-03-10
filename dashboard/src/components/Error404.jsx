import React from "react";
import mancha from "../img/mancha.jpg"
import notFound from "../css/notFound.css"

function Error404 (){
    return(
        <div>
            <h3 className="texto-not-found">404 - NOT FOUND</h3>
                <div className="contenedor">
                    <img src={mancha} alt="" />
                </div>
        </div>
    )
}

export default Error404;