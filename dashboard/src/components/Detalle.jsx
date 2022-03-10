import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../css/detalle.css";
import "../css/dashboard-styles.css";
import { useParams } from "react-router-dom";
import DetalleDescripcion from "./DetalleDescripcion";

export default function Detalle (){
    let params = useParams()

    const [info, setInfo] = useState({})
    useEffect(() => {

        async function fetchInfo(){
            let infoRes =  await fetch(`http://localhost:3001/api/${params.tipo}/${params.id}`)
            let newInfo = await infoRes.json()


            if (params.tipo === 'vinos'){
            newInfo.data.vinoUva = newInfo.data.vinoUva.nombre
            newInfo.data.vinoBodega = newInfo.data.vinoBodega.nombre
            newInfo.data.vinoCategoria = newInfo.data.vinoCategoria.nombre
            } else if (params.tipo === 'usuarios'){
                newInfo.data.usuarioTipo = newInfo.data.usuarioTipo.nombre
            }

            setInfo(newInfo.data)
        }
        
        fetchInfo()
    }, [])

    return(
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                <Topbar />  
                    <div className="container-fluid">
                        <div className=" mb-4">
                            <div className="card shadow mb-4 detalleTarjetas">
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 ">
                                        {info.nombre}
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img  className="img-fluid img-br mb-4"
                                            style={{ width: "40rem" }}
                                            src={`${info.imagen}`}
                                            id="imagen"
                                            alt="imagen"
                                        />
                                    </div>
                                    <div>
                                        <DetalleDescripcion tipo={params.tipo} info={info} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}


