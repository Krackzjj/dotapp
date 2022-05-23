import React from "react";

const Move = ({ nom }) => {
  return (
    <div className="video-box">
      <video
        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${nom}.webm`}
        autoPlay
        loop
      ></video>
    </div>
  );
};

export default Move;
