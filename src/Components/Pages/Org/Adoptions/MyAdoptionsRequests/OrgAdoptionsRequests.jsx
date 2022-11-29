import React from "react";
import "./OrgAdoptionsRequests.css";
import OrgSideBar from "../../../OrgSideBar/OrgSideBar";
import organimaladoption from "../../../../../assets/conejo.png"
const OrgAdoptionsRequests = () => {
    return(
        <div className="orgadop-mp">
            <OrgSideBar />
            <div className="orgadop-card">
            <h1 className="orgadop-title">Solicitud</h1>
                <p className="orgadop-description">Squachi</p>
                <img src={organimaladoption} width="100px" height="100px" alt="adoption-animal" className="orgadop-image"/>
                <button className="orgadop-btn">Eliminar</button>
            </div>
        </div>
    );
};

export default OrgAdoptionsRequests;