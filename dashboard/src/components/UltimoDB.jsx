import React, { Component } from "react";
import "../css/dashboard-styles.css";

export default class UltimoDB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ultimo: [],
            caracteristica: props.caracteristica,
        };
    }

    async getUltimo() {
        let link = "http://localhost:3001/api/" + this.state.caracteristica;

        console.log(this.state.caracteristica);

        let ultimoRes = await fetch(link);
        let ultimoJson = await ultimoRes.json();
        let ultimoElemento = {};
        let numero = 0;

        for (let elemento of ultimoJson.data) {
            if (elemento.id > numero) {
                numero = elemento.id;
            }
        }

        for (let elemento of ultimoJson.data) {
            if (numero == elemento.id) {
                ultimoElemento = elemento;
            }
        }

        this.setState({
            ultimo: ultimoElemento,
        });
    }

    componentDidMount() {
        this.getUltimo();
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            {this.state.ultimo.nombre}
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid img-br mb-4"
                                style={{ width: "40rem" }}
                                src={this.state.ultimo.imagen}
                                alt=" Harambee "
                            />
                        </div>
                        <div className="text-center">
                            <a
                                className="btn btn-danger"
                                target="_blank"
                                rel="nofollow"
                                href="/"
                            >
                                View wine details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
