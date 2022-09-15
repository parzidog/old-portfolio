// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Job = require('./models/job')
const School = require('./models/school')
const Project = require('./models/project')

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

const syncAndSeed = async () => {
  try {
  await db.sync({force: true});
  
  await Promise.all(jobs.map(job => Job.create(job)));
  await Promise.all(schools.map(school => School.create(school)));
  await Promise.all(projects.map(project => Project.create(project)));
  
//   await db.close();
  
  console.log("Successfully seeded the database!");
  } catch (error) {
  console.error("There was a problem seeding the database", error);
//   await db.close();
  }
  };

module.exports = {
    // Include your models in this exports object as well!
    db,
    syncAndSeed,
    Job,
    School,
    Project

}