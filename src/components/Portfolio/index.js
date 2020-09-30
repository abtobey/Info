import React from "react";
import "./style.css";
import PortfolioItem from "../PortfolioItem"
import projectList from "../../projects.json"

function Portfolio(){
const projects = projectList.projects;
let content=[]
for(let i=0; i<projects.length; i++){
    if(i % 2 ===0){
        if(i +1 < projects.length){
            content.push(
                <div className="row">
                    <PortfolioItem {...projects[i]} key={i}/>
                    <PortfolioItem {...projects[i+1]} key={i+1}/>
                </div>
            )
        }else{
            content.push(
                <div className="row">
                    <PortfolioItem {...projects[i]} key={i}/>
                </div>
            )
        }
    }
}
return (
    <main className="container">
    <h2>Aaron Tobey</h2>
    <hr/>
    <h2>Portfolio</h2>
    {content}

</main>
)
}

export default Portfolio;