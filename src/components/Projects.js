import React from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../features/projectsSlice";

function Projects(){
    // const projects=useSelector(selectProjects)
    const projects=[
    {
            name: 'This Website',
            description: 'This website uses a combination of React and PSQL to render and store my personal career information in order to showcase my abilities and experience. I use PSQL to make updates simple and efficient while using a modular rendering to increase the speed and effeciency of the website itself.',
            repo: 'https://github.com/parzidog/portfolio.git'
        },
        {
            name: 'Student / Campus Database',
            description: 'This website utilizes React and PSQL to render and store students and campuses while utilizing the relationship between the two. This concept is a modular design that is meant to increase performance and maximize efficiency while adding, removing or updating information directly from the UI.',
            repo: 'https://github.com/parzidog/2208-jpfp.git',
            video: "https://www.youtube.com/embed/_UeV63LfzYY"
        }
];

    return(
        <div className="projects">
            {projects.map(project=>{
                return(
                    <div className="singleProject">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <form action={project.repo}>
                            <input type="submit" value="See this repo"/><br/>
                        </form>
                        <iframe width="700" height="394" src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;