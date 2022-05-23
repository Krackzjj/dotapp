import React from "react";

const Profil = ({ img, nom, attr, long, role }) => {
  return (
    <div className="box-hero">
      <div className="profil">
        <img
          className="ico"
          src={`https://api.opendota.com${img}`}
          alt={`avatar ${nom}`}
        />
        <h2>{long}</h2>
      </div>
      <div className="attr">
        <img src={`../img/hero_icon_${attr.stat}.png`} alt="" />
        <p>{attr.range}</p>
      </div>
      <h3>Rôles</h3>
      <ul className="role">
        {role.map((r, index) => {
          return <li key={index}>{r}</li>;
        })}
      </ul>
      <h3>Lore</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eum
        repudiandae commodi mollitia esse eligendi, obcaecati nostrum deleniti
        similique expedita ipsa consequuntur animi consequatur, asperiores
        exercitationem maiores magnam! Maxime, a.
      </p>
    </div>
  );
};

export default Profil;
