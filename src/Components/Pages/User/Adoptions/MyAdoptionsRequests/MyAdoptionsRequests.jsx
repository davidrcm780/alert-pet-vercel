import React from "react";
import "./MyAdoptionsRequests.css";
import SideBar from "../../../../SideBar/SideBar";
import animaladoption from "../../../../../assets/conejo.png";

const MyAdoptionsRequests = () => {
    return(
        <div className="adprmp">
            <SideBar />
            <div className="adoptionsr-card">
                <h1 className="animaladop-title">Solicitud</h1>
                <p className="animaladop-description">Squachi</p>
                <img src={animaladoption} width="100px" height="100px" alt="adoption-animal" className="animaladop-image"/>
                <button className="animaladop-btn">Eliminar</button>
            </div>
        </div>
    );
};

export default MyAdoptionsRequests;