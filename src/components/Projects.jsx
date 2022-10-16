import React from "react";
// import { useSelector } from "react-redux";
// import { selectProjects } from "../features/projectsSlice";

function Projects(){
    // const projects=useSelector(selectProjects)
    const projects=[
    {
            name: 'This Website',
            description: 'This website uses a combination of  LESS, React and PostgreSQL to render and store my personal career information in order to showcase my abilities and experience. I use PSQL to make updates simple and efficient while using nested routes and a modular rendering with React to increase the speed and efficiency of the website itself. This will be a never ending project, and I am currently working to incorporate an interactive 3D environment utilizing ThreeJS',
            repo: 'https://github.com/parzidog/portfolio.git',
            website: 'https://www.parzidog.com'
        },
        {
            name: 'Student / Campus Database',
            description: 'This was one of my first "real" projects as a software engineer. It is not currently deployed, but it utilizes React and PSQL to render and store students and campuses while utilizing the relationship between the two. This concept is a modular design that is meant to increase performance and maximize efficiency while adding, removing or updating information directly from the UI. If I were to do this project again, I would make better use of nested routes within React Router and I would include a better design using the LESS framework. My biggest lesson from this project was the importance of error handling and truly modular designs.',
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