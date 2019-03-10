import React from "react";
import "./CatCard.css";


function CatCard(props) {
  return (
    <div className="cat" onClick={() => props.randomImages(props.id)}>
      <div className="img-container" >
        <img className ="img" alt={props.name} src={props.image} id = {props.id} />
      </div>
     
        
    
    </div>
  );
}

export default CatCard;
