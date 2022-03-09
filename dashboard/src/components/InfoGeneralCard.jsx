import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InfoGeneralCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                                    {this.props.number}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
InfoGeneralCard.propTypes = {
    borderColor: PropTypes.string,
    titleColor: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
};
