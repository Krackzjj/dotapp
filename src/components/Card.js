import React from "react";

const Cards = ({ img, name }) => {
  return (
    <div className="card">
      <img src={`https://api.opendota.com${img}`} alt={name} />
    </div>
  );
};

export default Cards;
