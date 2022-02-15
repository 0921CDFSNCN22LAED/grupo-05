import React from "react";

function InfoGeneral() {
    return (
        <div className="row">
            {/* <!-- Movies in Data Base --> */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Vinos en la Base de Datos
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    ∞
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Total awards --> */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Bodegas totales
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    10
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Actors quantity --> */}
            <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Varietales
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    7
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoGeneral;
