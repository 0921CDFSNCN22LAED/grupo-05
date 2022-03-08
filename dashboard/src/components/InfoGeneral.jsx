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

export default class InfoGeneral extends Component {
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
