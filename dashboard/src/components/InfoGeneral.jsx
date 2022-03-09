import React, { Component } from "react";
import InfoGeneralCard from "./InfoGeneralCard";


export default class InfoGeneral extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: [
                {
                    borderColor: "primary",
                    titleColor: "primary",
                    title: "Vinos en la Base de Datos",
                    number: 0
                },
                {
                    borderColor: "success",
                    titleColor: "success",
                    title: "Bodegas en la Base de Datos",
                    number: 0
                },
                {
                    borderColor: "warning",
                    titleColor: "warning",
                    title: "Uvas en la Base de Datos",
                    number: 0
                },
                {
                    borderColor: "danger",
                    titleColor: "danger",
                    title: "Usuarios en la Base de Datos",
                    number: 0
                }
            ]
        };
    }

    async getNumbers() {
        const dataVinos = await fetch("http://localhost:3001/api/vinos");
        const dataVinosJson = await dataVinos.json();
        const dataUsuarios = await fetch("http://localhost:3001/api/usuarios");
        const dataUsuariosJson = await dataUsuarios.json();
        const newMetrics = this.state.metrics

        newMetrics[0].number = dataVinosJson.meta.total
        newMetrics[1].number = Object.keys(dataVinosJson.countByCategory.bodegas).length
        newMetrics[2].number = Object.keys(dataVinosJson.countByCategory.uvas).length
        newMetrics[3].number = dataUsuariosJson.meta.total
        
        this.setState({
            metrics: newMetrics,
        });

        console.log(this.state);
    }

    componentDidMount() {
        this.getNumbers();
    }

    render() {
        return (
            <div className="row">
                {this.state.metrics.map((metric)=> (
                    <InfoGeneralCard 
                    borderColor={metric.borderColor}
                    titleColor={metric.titleColor}
                    title={metric.title}
                    number={metric.number}
                    />
                ))}
            </div>
        );
    }
}
