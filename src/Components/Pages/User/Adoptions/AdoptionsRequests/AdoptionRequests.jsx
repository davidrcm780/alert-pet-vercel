import React, { useState } from "react";
import "./AdoptionRequests.css";
import SideBar from "../../../../SideBar/SideBar";
import animaladoption from "../../../../../assets/conejo.png";
import NewRequestModal from "../../../../Modals/NewRequestModal/NewRequestModal";
import AdoptionsNR from "../../../../Modals/Users/AdoptionsNR/AdoptionsNR";

const AdoptionRequests = () => {
    const [viewadopmodalstate, viewadopchangemodalstate] = useState(false);

    return(
        <>
        <div className="adpmp">
            <SideBar />
            <div className="adoptions-card">
                <h1 className="animaladopr-title">Solicitud</h1>
                <p className="animaladopr-description">Squachi</p>
                <img src={animaladoption} width="100px" height="100px" alt="adoptionr-animal" className="animaladop-image"/>
                <button onClick={() => viewadopchangemodalstate(!viewadopmodalstate)} className="animaladopr-btn">Aplicar a adopción</button>
            </div>
            <NewRequestModal nrstate={viewadopmodalstate} nrchangestate={viewadopchangemodalstate}>
                <AdoptionsNR />
            </NewRequestModal>
        </div>
        </>
    );
};

export default AdoptionRequests;