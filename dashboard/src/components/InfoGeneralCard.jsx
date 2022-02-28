import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InfoGeneralCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            numero: 0
        }
    }

    async getNumber() {
        if(this.props.title == 'Vinos en la Base de Datos') {
            let vinosRes = await fetch("http://localhost:3001/api/vinos")
            let vinosJson = await vinosRes.json()

            this.setState({
                numero: vinosJson.meta.total
            })
        } else if (this.props.title == 'Bodegas en la Base de Datos') {
            let bodegasRes = await fetch('http://localhost:3001/api/bodegas')
            let bodegasJson = await bodegasRes.json()

            this.setState({
                numero: bodegasJson.meta.total
            })
        } else if (this.props.title == 'Uvas en la Base de Datos'){
            let uvasRes = await fetch("http://localhost:3001/api/uvas")
            let uvasJson = await uvasRes.json()
    
            this.setState({
                numero: uvasJson.meta.total
            })
        }
    }

    componentDidMount(){
        this.getNumber()
    }
    
    render(){
        return (
            <div className="col-md-4 mb-4">
                <div
                    className={`card border-left-${this.props.borderColor} shadow h-100 py-2`}
                >
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div
                                    className={`text-xs font-weight-bold text-${this.props.titleColor} text-uppercase mb-1`}
                                >
                                    {this.props.title}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {this.state.numero}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
InfoGeneralCard.propTypes = {
    borderColor: PropTypes.string,
    titleColor: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
};

