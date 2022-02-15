import React from "react";
import logo from "../img/logo.png";

function Brand() {
    return (
        <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
        >
            <div className="sidebar-brand-icon">
                <img className="w-100" src={logo} alt="Digital House" />
            </div>
        </a>
    );
}

export default Brand;
