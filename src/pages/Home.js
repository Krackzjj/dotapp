import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.opendota.com/api/heroStats")
      .then((res) => setHeroes(res.data));
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {heroes.map((hero) => (
          <Link
            to={`/details/${hero.name.slice(14)}`}
            key={hero.id}
            state={{
              nom: hero.name.slice(14),
              long: hero.localized_name,
              img: hero.img,
              id: hero.id,
              attr: {
                stat: hero.primary_attr,
                range: hero.attack_type,
              },
              role: hero.roles,
            }}
          >
            <Cards img={hero.img} name={hero.localized_name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
