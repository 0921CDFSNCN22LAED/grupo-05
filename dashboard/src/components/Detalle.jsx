import React from "react";
import "../css/dashboard-styles.css";
import Imagen from "../img/harambee.jpeg"
import "../css/detalle.css"

function Detalle (){
        return (
         <div>
             <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4 detalleTarjetas">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800 ">
                            Nombre del vino
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                             <img  className="img-fluid img-br mb-4"
                                style={{ width: "40rem" }}
                                src= {Imagen}
                                id="imagen"
                            />
                        </div>
                        <div className="text-center detalleTexto">
                           Detalle del vino: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus ipsa quasi et omnis reprehenderit adipisci, perspiciatis, totam temporibus voluptas nihil ipsam eius ab doloribus autem quisquam aliquam magni nobis.
                        </div>
                        <div className= "detalleBotones">
                            <a
                                className="btn btn-danger boton"
                                target="_blank"
                                rel="nofollow"
                                href="/"
                            >
                                Agregar a favoritos
                            </a>
                            <a
                                className="btn btn-danger"
                                target="_blank"
                                rel="nofollow"
                                href="/"
                            >
                                Agregar a cava
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
         </div>   
        )
    }

export default Detalle;