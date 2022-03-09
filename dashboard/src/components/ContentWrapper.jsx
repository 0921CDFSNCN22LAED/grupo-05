import React, { Component } from "react";
import Topbar from "./Topbar";
import H1 from "./H1";
import InfoGeneral from "./InfoGeneral";
import UltimoDB from "./UltimoDB";
import Vinos from "./Vinos";
import Footer from "./Footer";
import "../css/dashboard-styles.css";
import VinosCaracteristicas from "./VinosCaracteristicas";

export default class ContentWrapper extends Component {
    constructor(props){
        super(props)

        this.state = {
            caracteristicas: []
        }
    }

    async getCaracteristicas(){
        let res = await fetch("http://localhost:3001/api/vinos")
        let resJson = await res.json()
        let newCaracteristicas = []
        let nombreCaracteristicas = Object.keys(resJson.countByCategory)

        for(let i = 0; i < nombreCaracteristicas.length; i++){
            let nombre = nombreCaracteristicas[i]
            newCaracteristicas.push({
                [nombre]: []
            })
            for(let j = 0; j < Object.keys(resJson.countByCategory[nombre]).length; j++){
                let ojbLlave = Object.keys(resJson.countByCategory[nombre])[j]
                let ojbValor = Object.values(resJson.countByCategory[nombre])[j]
                newCaracteristicas[i][nombre].push({
                    [ojbLlave]: ojbValor
                })
            }
        }
        this.setState({
            caracteristicas: newCaracteristicas
        })
    }

    componentDidMount(){
        this.getCaracteristicas()
    }

    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                {/* <!-- Main Content --> */}
                <div id="content">
                    {/* <!-- Topbar --> */}
                    <Topbar />
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Content Row Top --> */}
                    <div className="container-fluid">
                        <H1 />

                        {/* General Info of DB */}
                        <InfoGeneral />
                        {/* <!-- End General Info of DB  --> */}

                        {/* <!-- Content Row Last wine in Data Base --> */}
                        <div className="row justify-content-center">
                            {/* <!-- Last Wine in DB --> */}
                            <UltimoDB caracteristica="vinos" />
                            {/* <!-- End content row last wine in Data Base --> */}

                            {/* <!-- Last Wine in DB --> */}
                            <UltimoDB caracteristica="usuarios" />
                            {/* <!-- End content row last wine in Data Base --> */}
                        </div>
                        <div className="row">
                            {/* <!-- Caracteristicas in DB --> */}

                            {this.state.caracteristicas.map((caracteristica => (
                                <VinosCaracteristicas caracteristica={Object.keys(caracteristica)[0]} elementos={caracteristica[Object.keys(caracteristica)[0]]} />
                            )))}

                            <Vinos />
                        </div>
                    </div>
                    {/* <!--End Content Row Top--> */}
                </div>
                {/* <!-- End of MainContent --> */}

                {/* <!-- Footer --> */}
                <Footer />
                {/* <!-- End of Footer --> */}
            </div>
        );
    }
}

