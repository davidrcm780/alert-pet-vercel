import React from "react";
import { Link } from "react-router-dom";
import "./AdoptionsNR.css";

const AdoptionsNR = () => {
  return (
    <>
      <div className="adopnr-body">
        <form action="" method="post" className="formadopnr">
          <div className="adopnr">
            <label for="des" className="adopnr-labels">
              Nombre
            </label>
            <input
              type="text"
              name="des"
              id="description"
              className="adopnr-inputs"
            />
          </div>
          <div className="adopnr">
            <label for="des" className="adopnr-labels">
              Apellido
            </label>
            <input
              type="text"
              name="des"
              id="description"
              className="adopnr-inputs"
            />
          </div>
          <div className="adopnr">
            <label for="des" className="adopnr-labels">
              Telefono
            </label>
            <input
              type="text"
              name="des"
              id="description"
              className="adopnr-inputs"
            />
          </div>
          <div className="adopnr">
            <label for="des" className="adopnr-labels">
                Razon por la cual quiere adoptar
            </label>
            <input
              type="text"
              name="des"
              id="description"
              className="adopnr-inputs"
            />
          </div>
          <Link to="/usermyadopr">
            <button type="submit" className="adopnr-btn">
              Enviar
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default AdoptionsNR;
