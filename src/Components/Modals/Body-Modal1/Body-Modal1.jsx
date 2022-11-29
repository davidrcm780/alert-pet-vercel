import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Body-Modal1.css";

const BodyModal1 = () => {
  return (
    <>
      <div className="modal1-body">
        <form className="formuser">
          <div className="user-names">
            <input
              type={"text"}
              name="name"
              id="name"
              placeholder="Nombre"
              className="name-inputs"
            />
            <input
              type={"text"}
              name="lastname"
              id="lastname"
              placeholder="Apellido"
              className="name-inputs"
            />
          </div>
          <input
            type={"email"}
            name="email"
            id="email"
            placeholder="Correo Electrónico"
            className="reg-inputs"
          />
          <input
            type={"password"}
            name="password"
            id="password"
            placeholder="Contraseña"
            className="reg-inputs"
          />
          <div className="birth-date">
            <label for="birth" className="reg-labels">
              Fecha de Nacimiento
            </label>
            <input
              type={"date"}
              name="birth"
              id="birth"
              className="reg-inputs"
            />
          </div>
          <input
            type={"tel"}
            name="phonenumber"
            id="phonenumber"
            placeholder="Número de teléfono"
            className="reg-inputs"
          />
          <fieldset className="reg-gender">
            <legend className="reg-labels"> Sexo </legend>
            <div className="radio-btns">
              <input type={"radio"} id="gender1" name="female" value="female" />
              <label for="gender" className="reg-labels">
                Mujer
              </label>
            </div>
            <div className="radio-btns">
              <input type={"radio"} id="gender2" name="male" value="male" />
              <label for="gender" className="reg-labels">
                Hombre
              </label>
            </div>
          </fieldset>
          <Link to="/userpage">
            <button type="submit" className="reg-btn">
              Registrarse
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default BodyModal1;
