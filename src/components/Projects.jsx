import React from "react";
import { useSelector } from "react-redux";
import { selectProjects } from "../features/projectsSlice";

function Projects(){
    // const projects=useSelector(selectProjects)
    const projects=[
    {
            name: 'This Website',
            description: 'This website uses a combination of  LESS, React and PSQL to render and store my personal career information in order to showcase my abilities and experience. I use PSQL to make updates simple and efficient while using a modular rendering with React to increase the speed and efficiency of the website itself.',
            repo: 'https://github.com/parzidog/portfolio.git'
        },
        {
            name: 'Student / Campus Database',
            description: 'This was one of my first "real" project as a software engineer. It is not currently deployed, but it utilizes React and PSQL to render and store students and campuses while utilizing the relationship between the two. This concept is a modular design that is meant to increase performance and maximize efficiency while adding, removing or updating information directly from the UI.',
            repo: 'https://github.com/parzidog/2208-jpfp.git',
            video: "https://www.youtube.com/embed/_UeV63LfzYY"
        }
];

    return(
        <div className="projects">
            {projects.map(project=>{
                return(
                    <div className="singleProject" key={project.name}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <form action={project.repo}>
                            <input type="submit" value="See this repo"/><br/>
                        </form>
                        <div className="video">
                            <iframe width="560" height="315" src={project.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;