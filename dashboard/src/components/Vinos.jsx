import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Vinos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vinos: [],
        };
    }

    async getVinos() {
        let vinosRes = await fetch("http://localhost:3001/api/vinos");
        let vinosJson = await vinosRes.json();

        this.setState({ vinos: vinosJson.data });
    }

    componentDidMount() {
        this.getVinos();
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Vinos in Data Base
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.vinos.map((vino) => (
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <Link
                                            to={"/detalle-vino/vinos/" + vino.id}
                                            className="card-body text-white"
                                            key={vino.id}
                                        >
                                            {vino.nombre}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
