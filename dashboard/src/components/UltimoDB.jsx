import React, { Component } from "react";
import "../css/dashboard-styles.css";
import {Link} from "react-router-dom"

export default class UltimoDB extends Component {
    constructor(props){
        super(props)

        this.state = {
            link: `/detalle-vino/${props.tipo}/${props.id}`
        }
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            {this.props.nombre}
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img
                                className="img-fluid img-br mb-4"
                                style={{ width: "40rem" }}
                                src={this.props.imagen}
                                id="imagen"
                            />
                        </div>
                        <div className="text-center">
                            <Link
                                className="btn btn-danger"
                                to={this.state.link}
                            >
                                DETALLE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
