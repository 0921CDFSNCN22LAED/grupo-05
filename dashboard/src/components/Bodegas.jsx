import React, { Component } from "react";

export default class Bodegas extends Component {

    constructor(props){
        super(props)

        this.state = {
            bodegas: []
        }
    }

    async getBodegas(){
        let bodegasRes = await fetch('http://localhost:3001/api/bodegas')
        let bodegasJson = await bodegasRes.json()

        this.setState({
            bodegas: bodegasJson.data
        })
    }

    componentDidMount(){
        this.getBodegas()
        console.log(this.state.bodegas)
    }

    render(){
        return(
            
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header ${props.titleColor} py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Bodegas in Data Base
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {this.state.bodegas.map((bodega) => (    
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body" key={bodega.id}>{bodega.nombre}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
