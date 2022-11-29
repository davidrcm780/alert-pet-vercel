import React from "react";
import { Link } from "react-router-dom";
import "./OrgAdopNR.css";

const OrgAdopNR = () => {
  return (
    <>
      <div className="adop-body">
        <form action="" method="post" className="formadop">
          <div className="orgadopnr">
            <label for="image" className="file-label">
              Agrega Una imágen <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-file-image"
                viewBox="0 0 16 16"
                className="img-file"
              >
                <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z" />
              </svg>
              <input type="file" id="image" className="fileinput" />
            </label>
          </div>
          <div className="orgadopnr">
            <label for="des" className="orgadopnr-labels">
              Nombre del animal
            </label>
            <input
              type="text"
              name="des"
              id="description"
              className="orgadopnr-inputs"
            />
          </div>
          <div className="orgadopnr">
            <label for="des" className="orgadopnr-labels">
              Descripción
            </label>
            <input
              type="text"
              name="des"
              id="description"
              className="orgadopnr-inputs"
            />
          </div>
          <Link to="/orgadopr">
            <button type="submit" className="orgadopnr-btn">
              Publicar
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default OrgAdopNR;
