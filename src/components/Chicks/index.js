import React from "react";
import "./style.css";

function Chick(props) {
  return (
    <div className="card" onClick={() => props.playerClick(props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default Chick;
