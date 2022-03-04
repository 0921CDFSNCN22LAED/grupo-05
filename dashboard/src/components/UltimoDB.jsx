import React from "react";
import imgVino from "../img/harambee.jpeg";
import "../css/dashboard-styles.css";

function UltimoDB() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Last Wine in Data Base
                    </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img
                            className="img-fluid img-br mb-4"
                            style={{ width: "40rem" }}
                            src={imgVino}
                            alt=" Harambee "
                        />
                    </div>
                    <p>
                        Es un vino que pega en garganta cual tiro en el pecho.
                    </p>
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

export default UltimoDB;
