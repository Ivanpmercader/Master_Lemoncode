import React from "react";
export const NumberComponent: React.FC = () => {
    const base: number = 10;
  return (
    <>
        <hr/>
        <div className="numberContainer">
          <span>{Math.floor(Math.random() * base)}</span>
        </div>
    </>
  );
};