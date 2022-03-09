import React, { Component } from "react";
import InfoGeneralCard from "./InfoGeneralCard";

const metrics = [
    {
        borderColor: "primary",
        titleColor: "primary",
        title: "Vinos en la Base de Datos",
    },
    {
        borderColor: "success",
        titleColor: "success",
        title: "Bodegas en la Base de Datos",
    },
    {
        borderColor: "warning",
        titleColor: "warning",
        title: "Uvas en la Base de Datos",
    },
    {
        borderColor: "danger",
        titleColor: "danger",
        title: "Usuarios en la Base de Datos",
    },
];

export default class InfoGeneral extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodegasNumber: 0,
            vinosNumber: 0,
            uvasNumber: 0,
            usuariosNumber: 0,
        };
    }

    async getNumbers() {
        const dataVinos = await fetch("http://localhost:3001/api/vinos");
        const dataVinosJson = await dataVinos.json();
        this.setState({
            vinosNumber: dataVinosJson.meta.total,
        });
        this.setState({
            bodegasNumber: Object.keys(dataVinosJson.countByCategory.bodegas)
                .length,
        });
        this.setState({
            uvasNumber: Object.keys(dataVinosJson.countByCategory.uvas).length,
        });

        const dataUsuarios = await fetch("http://localhost:3001/api/usuarios");
        const dataUsuariosJson = await dataUsuarios.json();
        this.setState({
            usuariosNumber: dataUsuariosJson.meta.total,
        });
    }

    componentDidMount() {
        this.getNumbers();
    }

    render() {
        return (
            <div className="row">
                <InfoGeneralCard
                    borderColor={metrics[0].borderColor}
                    titleColor={metrics[0].titleColor}
                    title={metrics[0].title}
                    number={this.state.vinosNumber}
                />
                <InfoGeneralCard
                    borderColor={metrics[1].borderColor}
                    titleColor={metrics[1].titleColor}
                    title={metrics[1].title}
                    number={this.state.bodegasNumber}
                />
                <InfoGeneralCard
                    borderColor={metrics[2].borderColor}
                    titleColor={metrics[2].titleColor}
                    title={metrics[2].title}
                    number={this.state.uvasNumber}
                />
                <InfoGeneralCard
                    borderColor={metrics[3].borderColor}
                    titleColor={metrics[3].titleColor}
                    title={metrics[3].title}
                    number={this.state.usuariosNumber}
                />
            </div>
        );
    }
}
