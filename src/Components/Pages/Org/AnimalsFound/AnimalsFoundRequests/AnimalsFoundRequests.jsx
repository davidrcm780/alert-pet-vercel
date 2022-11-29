import React from "react";
import { Link } from "react-router-dom";
import "./AnimalsFoundRequests.css";
import OrgSideBar from "../../../OrgSideBar/OrgSideBar";
import animalpicture from "../../../../../assets/perro.png";

const AnimalsFoundRequests = () => {
    return(
        <div className="afar">
            <OrgSideBar />
            <div className="afar-card">
                <h1 className="afar-title">Solicitud</h1>
                <img src={animalpicture} alt="newanimal" width="90px" height="90px" className="afar-image" />
                <p className="afar-description">Perrito encontrado en bulevard venezuela cerca de Serma</p>
                <p className="afar-description">Estado: Crítico</p>
                <p className="afar-description">Ubicacion: Blvr. Venezuela #2110, San Salvador</p>
                <Link to="/orgmafra">
                <button className="afar-btn">Aceptar</button>
                </Link>
            </div>
        </div>
    );
};

export default AnimalsFoundRequests;