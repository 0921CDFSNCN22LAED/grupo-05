import React, { Component } from "react";
import InfoGeneralCard from "./InfoGeneralCard";

const metrics = [
    {
        borderColor: "primary",
        titleColor: "primary",
        title: "Vinos en la Base de Datos",
        number: 0,
    },
    {
        borderColor: "success",
        titleColor: "success",
        title: "Bodegas en la Base de Datos",
        number: 0,
    },
    {
        borderColor: "warning",
        titleColor: "warning",
        title: "Uvas en la Base de Datos",
        number: 0,
    },
    {
        borderColor: "danger",
        titleColor: "danger",
        title: "Usuarios en la Base de Datos",
        number: 0,
    },
];

const getNumbers = async function () {
    const dataVinos = await fetch("http://localhost:3001/api/vinos");
    const dataVinosJson = await dataVinos.json();
    metrics[0].number = dataVinosJson.meta.total;
    metrics[1].number = Object.keys(
        dataVinosJson.countByCategory.bodegas
    ).length;
    metrics[2].number = Object.keys(dataVinosJson.countByCategory.uvas).length;

    const dataUsuarios = await fetch("http://localhost:3001/api/usuarios");
    const dataUsuariosJson = await dataUsuarios.json();
    metrics[3].number = dataUsuariosJson.meta.total;
    console.log(metrics);
};
getNumbers();
export default class InfoGeneral extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.getNumbers();
    }

    render() {
        return (
            <div className="row">
                {metrics.map((metric, i) => {
                    return (
                        <InfoGeneralCard
                            borderColor={metric.borderColor}
                            titleColor={metric.titleColor}
                            title={metric.title}
                            number={metric.number}
                            key={i + metric}
                        />
                    );
                })}
            </div>
        );
    }
}
