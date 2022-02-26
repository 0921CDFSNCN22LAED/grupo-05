import React from "react";
import "../css/dashboard-styles.css";

function Footer() {
    return (
        <footer className="sticky-footer bg-grey">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span className="span-footer">
                        Copyright &copy; Dashboard 2021
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
