import React from "react";
import "./AFRequests.css";
import SideBar from "../../../../SideBar/SideBar";
import animalpicture from "../../../../../assets/perro.png";

const AFRequests = () => {
    return(
        <div className="afrmp">
            <SideBar />
            <div className="afr-card">
                <h1 className="animalf-title">Solicitud</h1>
                <img src={animalpicture} alt="newanimal" width="90px" height="90px" className="afimage" />
                <p className="animalf-description">Perrito encontrado en bulevard venezuela cerca de Serma</p>
                <p className="animalf-description">Estado: Crítico</p>
                <p className="animalf-description">Ubicacion: Blvr. Venezuela #2110, San Salvador</p>
                <button className="animalf-btn">Eliminar</button>
            </div>
        </div>
    );
};

export default AFRequests;