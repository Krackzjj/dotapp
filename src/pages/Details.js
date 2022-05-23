import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Profil from "../components/details/Profil";
import Move from "../components/details/Move";
import Best from "../components/details/Best";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const [matchs, setMatchs] = useState([]);
  const [bests, setBests] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.opendota.com/api/heroes/${data.id}/matchups`)
      .then((res) => setMatchs(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="main-grid">
        <Profil
          img={data.img}
          nom={data.nom}
          attr={data.attr}
          long={data.long}
          role={data.role}
        />
        <Move nom={data.nom} />
        {matchs.slice(0, 3).map((match, index) => {
          return <Best key={index} id={match.hero_id} />;
        })}
      </div>
    </>
  );
};

export default Details;
