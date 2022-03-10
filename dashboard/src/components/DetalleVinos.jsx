import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Detalle from "./Detalle";

function DetalleVinos(){
    return(
        <div>
            <Topbar />         
                    <Detalle/>
            <Sidebar />
           
        </div>
    )
}



export default DetalleVinos;