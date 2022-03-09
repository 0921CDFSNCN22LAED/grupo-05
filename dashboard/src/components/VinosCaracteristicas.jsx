import React, { Component } from "react";

export default class VinosCaracteristicas extends Component {
    
    render(){
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Las {this.props.caracteristica} de los vinos
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.props.elementos.map((elemento, i) => (
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body" key={elemento.id + i}>{Object.keys(elemento)[0]}: {Object.values(elemento)[0]}</div>
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
