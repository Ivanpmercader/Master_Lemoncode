import React from "react";
import logoImg from '../images/logo.png';


export const ImageComponent = () => {
  return (
    <div id="imgContainer">
       <img src={logoImg} alt="Logo" />
    </div>
  );
};