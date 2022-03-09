import React, { Component } from "react";
import "../css/dashboard-styles.css";

export default class UltimoDB extends Component {

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
