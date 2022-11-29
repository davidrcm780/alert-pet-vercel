import React from "react";
import "./RescueAnimalsR.css";
import SideBar from "../../../../SideBar/SideBar";
import rescueanimal from "../../../../../assets/pasear-al-perro.png"

const RescueAnimalsR = () => {
    return(
        <div className="resanimp">
            <SideBar />
            <div className="resanimr-card">
                <h1 className="resanimr-title">Solicitud</h1>
                <p className="resanimr-description">Rabito</p>
                <img src={rescueanimal} alt="Rescue Animal" width="80px" height="80px" className="resanimr-img"/>
                <button className="resanimr-btn">Eliminar</button>
            </div>
        </div>
    );
};

export default RescueAnimalsR;