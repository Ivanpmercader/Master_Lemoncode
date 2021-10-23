import React from "react";

export const EnvComponent = () => {
    const API_BASE = process.env.API_BASE;
  return (
    <>
        <hr></hr>
        <p className="envLine">Cargando la variable desde el environment: <span>{API_BASE}</span></p>
    </>
  );
};