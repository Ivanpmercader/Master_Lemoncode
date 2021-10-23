import React from "react";

const API_BASE = process.env.API_BASE;

export const HelloComponent: React.FC = () => {
  return <h1 className="title">Hello Parcel: ENV - { API_BASE }</h1>
};