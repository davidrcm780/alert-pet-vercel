import React from "react";
import "./MyAnimalsFoundRA.css";
import OrgSideBar from "../../../OrgSideBar/OrgSideBar";
import animalpicture from "../../../../../assets/perro.png"

const MyAnimalsFoundRA = () => {
    return(
        <div className="mafra">
            <OrgSideBar />
            <div className="mafra-card">
                <h1 className="mafra-title">Solicitud</h1>
                <img src={animalpicture} alt="newanimal" width="90px" height="90px" className="mafra-image" />
                <p className="mafra-description">Perrito encontrado en bulevard venezuela cerca de Serma</p>
                <p className="mafra-description">Estado: Crítico</p>
                <p className="mafra-description">Ubicacion: Blvr. Venezuela #2110, San Salvador</p>
                <button className="mafra-btn">Finalizar</button>
            </div>
        </div>
    );
};

export default MyAnimalsFoundRA;