import React from 'react';
// import projects from '../projects';

export default function ProjectCards({projects}) {
    console.log(projects)
    return(
        <div className="row">
            {
                projects.map((project,i) => (
                    <div className="card col-5">
                    <div className="card-body" key={i}>
                    <img class="card-img-top" src={project.project.src} alt="Card image cap"></img>
                    <h5 className="card-title">{`${project.project.title}`}</h5>
                    <p className="card-text">{`${project.project.description}`}</p>
                </div>
        </div>
                ))}
        </div>
        )
                }
            
        