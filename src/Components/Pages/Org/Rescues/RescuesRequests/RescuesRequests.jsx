import React from "react";
import "./RescuesRequests.css";
import OrgSideBar from "../../../OrgSideBar/OrgSideBar";
import rescueanimal from "../../../../../assets/pasear-al-perro.png";

const RescuesRequests = () => {
    return(
        <div className="rrmp">
            <OrgSideBar />
            <div className="rrmp-card">
                <h1 className="rrmp-title">Solicitud</h1>
                <p className="rrmp-description">Rabito</p>
                <img src={rescueanimal} alt="Rescue Animal" width="80px" height="80px" className="rrmp-img"/>
                <button className="rrmp-btn">Mascota encontrada</button>
            </div>
        </div>
    );
};

export default RescuesRequests;