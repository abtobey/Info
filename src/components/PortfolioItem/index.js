import React from "react";
import "./style.css";

function PortfolioItem(props){

    return(

        <div className="col-md-6 col-12 pf-img flip-card">
        <a href={props.href}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <img src={props.image} alt={props.alt} style={{height:"195px", width:"260px"}}></img><div className="img-text">{props.title}</div>
          </div>
          <div className="flip-card-back">
            <h3>{props.title}</h3>
            {props.description}
          </div>
        </div></a>
      </div>

    )

}

export default PortfolioItem