import React, { Component } from "react";

export default class Categorias extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            categorias: []
        }
    }

    async getCategorias(){
        let categoriasRes = await fetch("http://localhost:3001/api/categorias")
        let categoriasJson = await categoriasRes.json()

        this.setState({
            categorias: categoriasJson.data
        })
    }

    componentDidMount(){
        this.getCategorias()
    }
    
    render(){
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Categorias in Data Base
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.categorias.map((categoria) => (
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body" key={categoria.id}>{categoria.nombre}</div>
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
