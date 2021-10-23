import React from "react";
import ReactDOM from "react-dom";
import { TitleComponent } from "./components/titleComponent";
import { ImageComponent } from "./components/imageComponent";
import { EnvComponent } from "./components/envComponent";

ReactDOM.render(
  <div>
    <TitleComponent/>
    <ImageComponent/>
    <EnvComponent/>
  </div>,
  document.getElementById("root")
);
