import React, { Component } from "react";

export default class VinosCaracteristicas extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            elementos: [],
            caracteristica: props.caracteristica
        }
    }

    async getElementos(){
        let link = "http://localhost:3001/api/" + this.state.caracteristica

        console.log(this.state.caracteristica);

        let elementosRes = await fetch(link)
        let elementosJson = await elementosRes.json()

        this.setState({
            elementos: elementosJson.data
        })
    }
    

    componentDidMount(){
        this.getElementos()
    }
    
    render(){
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Las {this.state.caracteristica} de los vinos
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.elementos.map((elemento, i) => (
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body" key={elemento.id + i}>{elemento.nombre}</div>
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
