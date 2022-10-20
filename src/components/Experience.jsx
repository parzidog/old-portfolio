import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import Typewriter from 'typewriter-effect';
// import {selectJobs} from '../features/jobsSlice'
// import {selectSchools} from '../features/schoolsSlice'

function Experience(){

    // const jobs = useSelector(selectJobs)
    // const schools = useSelector(selectSchools)
    let num = 0;
    const jobs =[
    {
        name: 'Donald Jones Consulting',
        title: 'General Manager / IT Consultant',
        date: 'September 2021 - PRESENT',
        description:[
            'Managed a process re-engineering project to improve and consolidate end-to-end service processes.',
            'Restructured communication flow among 28 facilities and cut down paperwork by 45%.',
            'Controlled the release of proprietary information by organizing and developing secure information systems.',
            'Analyzed and adjusted work procedures for the chief of operations that maximized production efficiency by 32%.',
            'Planned, set and implemented facility goals while maintaining budget standards which led to a 1200% increase in facility utilization.',
        ]
    },
    {
        name: 'Trinity Executive Services',
        title: 'Hospital Security Officer',
        date: 'February 2020 - November 2020',
        description:[
            'Implemented effective deescalation techniques that lowered the number of physical confrontations by 28% during the height of the COVID pandemic.',
            'Coordinated security protocols to comply with both HIPAA and Joint Commission standards while protecting the doctors, nurses and patients of the facility.',
            'Controlled the release of proprietary information by organizing and developing secure information systems.',
            'Assessed the development and effectiveness of subordinates while cultivating the strengths of individuals within the team.',
        ]
    },
    {
        name: 'G3 Construction, inc.',
        title: 'Lead Commercial Foreman',
        date: 'January 2018 - January 2020',
        description:[
            'Planned, scheduled and assigned work for optimal distribution, staffing and production; consistently achieved deadlines, quality control goals, and produced quality inter-trade relations.',
            'Negotiated general contracts, purchase orders and subcontract agreements with clients and subcontractors.',
            'Supervised crews of up to 10 carpenters, journeymen, drywall hangers, and general labor personnel.',
            'Inspecting work in progress to ensure quality and conformity to contract and drawing specifications in accordance with federal guidelines',
            'nspected work in progress to ensure quality and conformity to contract and drawing specifications in accordance with state and federal guidelines.',
        ]
    },
    {
        name: 'United States Marine Corps',
        title: 'Sergeant / Division Lead',
        date: 'Devember 2010 - January 2018',
        description:[
            'Held a Top Secret security clearance from 2012 – 2018.',
            'Overcame seemingly insurmountable odds to attain operational readiness on 2 separate occasions. As a result, was awarded the Navy and Marine Corps Achievement medal on each occasion.',
            'Re-engineered the technological documentation process for the largest program in military aviation in order to improve document access and storage by 86% while removing the time needed for project management by 79%.',
            'Cultivated an environment that encourages organizational readiness and individual mental health awareness.',
            'upervised and commanded maintenance teams of up to 65 Marines in high stress combat situations while maintaining a professional, combat ready squadron of F/A-18 and F-35 fighter jets.',
        ]
    },
];
const schools=[
    {
        name: 'Amazon Web Services',
        date: 2022,
        certification: 'AWS Cloud Practitioner'
    },
    {
        name: 'Fullstack Academy',
        date: 2022,
        certification: 'Full Stack Software Engineer'
    },
    {
        name: 'Embry-Riddle Aeronautical University',
        date: 2023,
        certification: 'A.S. Engineering'
    },

];

    return(
        <div className="experiencePage">
            <div className="quote">
                <h1>“In order to be irreplaceable one must always be different.”</h1>
                <h4>-Coco Chanel</h4>
            </div>
            <div className="story">
                <h1><Typewriter
                        options={{
                            strings: ['MY STORY'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 2,
                        }}
                    /></h1>
                <p>I am a lifelong student above all else. I am also a Marine Corps veteran with a degree in engineering and a true passion for computer programming. I spent more than 7 years in the Marine Corps with a top-secret security clearance working as a hydraulic and structures mechanic on F/A-18 and F-35 fighter jets where I successfully coordinated the duties of over 50 Marines while conducting the duties of the department head and running the phased maintenance program, one of the largest programs in military aviation maintenance. As a result of my abilities and efforts, I was awarded the Navy/Marine Corps Achievement medal on 2 separate occasions, as well as numerous other awards and commendations, including the multiple Good Conduct medals and Letters of Commendation. After leaving military service, I worked as a foreman for a commercial construction company where I simultaneously ran up to 3 job sites before deciding to go back to school and obtain my degree in engineering while simultaneously working up to three jobs. It was at this time that I discovered my love for computers and computer programming. While attending college full-time, I taught myself C/C++, Python, HTML and CSS programming languages before deciding to pursue a formal education in Software Engineering with a focus in Javascript and web development.</p>
            </div>
            <div className="experience">
                <h1><Typewriter
                        options={{
                            strings: ['EXPERIENCE'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 2,
                        }}
                    />
                </h1>
                <h2 className="download">
                    <a href="resume.pdf" download>Download Resume</a>
                </h2>
                {jobs.map(job=>{
                    return(
                        <div className="singleJob" key={job.name}>
                            <h3 className="companyName">{job.name}</h3>
                            <p className="date">{job.date}</p>
                            <div className="jobDetails">
                                <ul>
                                    {job.description.map(bullet=>{
                                        num+=1;
                                        return(
                                            <li key={num}>{bullet}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })} 
            </div>
            <div className="education">
                <h1><Typewriter
                        options={{
                            strings: ['EDUCATION'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 2,
                        }}
                    /></h1>
                {schools.map(school=>{
                    return( 
                        <div className="singleInstitute" key={school.name}>
                            <p className="date">{school.date}</p>
                            <h4 className="instituteName">{school.name}</h4>
                            <h3 className="certification">{school.certification}</h3>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Experience;