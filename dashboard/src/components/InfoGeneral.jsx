import React from "react";
import InfoGeneralCard from "./InfoGeneralCard";

const metrics = [
    {
        borderColor: "primary",
        titleColor: "primary",
        title: "Vinos en la Base de Datos",
        number: 47,
    },
    {
        borderColor: "success",
        titleColor: "success",
        title: "Bodegas totales",
        number: 10,
    },
    {
        borderColor: "warning",
        titleColor: "warning",
        title: "Varietales",
        number: 7,
    },
];

function InfoGeneral() {
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

export default InfoGeneral;
