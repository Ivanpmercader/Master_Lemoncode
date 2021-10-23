import React from "react";
import { getRandomNumber } from "../ts/numbers";

export const TitleComponent = () => {
    const randomNumber : number = getRandomNumber();
    const title: string = `Hello World Width Random Number (${randomNumber}) And React`;
  return (
    <h1 className= "title">{title}</h1>
  );
};