import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Typewriter from 'typewriter-effect';
import {selectJobs} from '../features/jobsSlice'
import {selectSchools} from '../features/schoolsSlice'

function Experience(){

    // const jobs = useSelector(selectJobs)
    // const schools = useSelector(selectSchools)
    const jobs =[
    {
        name: 'Donald Jones Consulting',
        title: 'General Manager / IT Consultant',
        date: '2021-PRESENT',
        description:[
            'Enumerating and specifying procedures for the implementation, production and administration of written policies',
            'Properly controlling the release of proprietary information by organizing and developing information systems',
            'Providing meticulous reports and documentation for offsite owners of both the facility and the consultation company',
            'Analyzing and adjusting work procedures for maximum efficiency',
            'Effectively controlling costs through economical utilization of personnel, materials and equipment',
            'Planning, forecasting, setting objectives and determining best courses of action for the facility',
            'Developing enduring professional relationships with businesses and contractors'
        ]
    },
    {
        name: 'Trinity Executive Services',
        title: 'Security Officer',
        date: '2020',
        description:[
            'Coping effectively with pressure and tension between hospital staff and patients',
            'Firmly and fairly managing problems and disruptions while maintaining empathy towards the feelings of all parties',
            'Coordinating security protocols with both HIPAA and Joint Commission standards',
            'Regularly assessing the development and effectiveness of subordinates while cultivating the strengths of individuals within the team',
        ]
    },
    {
        name: 'G3 Construction, inc.',
        title: 'Lead Commercial Foreman',
        date: '2018-2020',
        description:[
            'Planning, scheduling and assigning work for optimal distribution, staffing and efficiencies; consistently achieved deadlines, quality control goals, and produced quality inter-trade relations',
            'Holding meetings with clients to discuss/negotiate general contracts, purchase orders and subcontract agreements',
            'Closely monitoring budget variances and reports to maintain effective cost control',
            'Inspecting work in progress to ensure quality and conformity to contract and drawing specifications in accordance with federal guidelines',
            'Supervising crews of up to 10 carpenters, journeymen, drywall hangers, and general labor personnel',
        ]
    },
    {
        name: 'United States Marine Corps',
        title: 'Sergeant / Department Lead',
        date: '2010-2018',
        description:[
            'Creating and implementing IT programs to maintain OSHA compliance while accepting responsibility for compliance of regulations.',
            'Creating an environment that encourages organizational readiness',
            'Maintaining morale and fostering relationships with both junior and senior Marines',
            'Closely monitoring and regulating federal operational and security guidelines within the restrictions of my Top Secret security clearance',
            'Assessing, organizing and arranging resources to effectively and efficiently maintain USMC and federal regulations',
            'Delegating responsibilities to junior Marines based upon their abilities and strengths to efficiently promote organizational needs.',
            'Successfully handled demands from superiors and subordinates',
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
                <h1>"Make everything as simple as possible, but not simpler."</h1>
                <h5>-Albert Einstein</h5>
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
                    /></h1>
                {jobs.map(job=>{
                    return(
                        <div className="singleJob">
                            <h3 className="companyName">{job.name}</h3>
                            <p className="date">{job.date}</p>
                            <div className="jobDetails">
                                <ul>
                                    {job.description.map(bullet=>{
                                        return(
                                            <li>{bullet}</li>
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
                        <div className="singleInstitute">
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