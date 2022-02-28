import React from "react";
import Topbar from "./Topbar";
import H1 from "./H1";
import InfoGeneral from "./InfoGeneral";
import UltimoVinoDB from "./UltimoVinoDB";
import Bodegas from "./Bodegas";
import Categorias from "./Categorias";
import Uvas from "./Uvas";
import Footer from "./Footer";
import "../css/dashboard-styles.css";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
                {/* <!-- Topbar --> */}
                <Topbar />
                {/* <!-- End of Topbar --> */}

                {/* <!-- Content Row Top --> */}
                <div className="container-fluid">
                    <H1 />

                    {/* General Info of DB */}
                    <InfoGeneral />
                    {/* <!-- End General Info of DB  --> */}

                    {/* <!-- Content Row Last wine in Data Base --> */}
                    <div className="row justify-content-center">
                        {/* <!-- Last Wine in DB --> */}
                        <UltimoVinoDB />
                        {/* <!-- End content row last wine in Data Base --> */}
                    </div>
                    <div className="row">
                        {/* <!-- Bodegas in DB --> */}
                        <Bodegas />

                        {/* <!-- Uvas in DB --> */}
                        <Uvas />

                        {/* <!-- Categorias in DB --> */}
                        <Categorias />
                    </div>
                </div>
                {/* <!--End Content Row Top--> */}
            </div>
            {/* <!-- End of MainContent --> */}

            {/* <!-- Footer --> */}
            <Footer />
            {/* <!-- End of Footer --> */}
        </div>
    );
}

export default ContentWrapper;
