import React, { Component } from "react";

export default class Varietales extends Component {
    constructor(props){
        super(props)

        this.state = {
            uvas: []
        }
    }

    async getUvas(){
        let uvasRes = await fetch("http://localhost:3001/api/uvas")
        let uvasJson = await uvasRes.json()

        this.setState({uvas: uvasJson.data})
    }

    componentDidMount(){
        this.getUvas()
    }
    
    
    render(){
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Uvas in Data Base
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.uvas.map((uva) => (
                                <div className="col-lg-6 mb-4">
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body" key={uva.id}>{uva.nombre}</div>
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
