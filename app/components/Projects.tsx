import styles from './Projects.module.css'
import GithubSVG from '@/../public/social-media-svgs/github.svg'

interface Project {
  name: string,
  subheading: string,
  description: string,
  videourl: string,
  demolink: string | null,
  githublink: string
}

const Projects = () => {

  const projectList: Project[] = [
    {
      name: "Wheel of Fortune",
      subheading: "Inspired by the Crazy time game show",
      description: "Wheel of Fortune game, where players can bet on different outcomes and win multipliers or play bonus games for big wins, currently no user tied balance but could be a feature in the future.",
      videourl: "https://www.youtube.com/embed/wMr4nhR1HYo?mute=1&autoplay=1&loop=1&playlist=wMr4nhR1HYo",
      demolink: "https://wheel-of-fortune-shoutcape.vercel.app/wheeloffortune",
      githublink: "https://github.com/shoutcape/wheel-of-fortune"
    },
    {
      name: "Tech Jobs Finland",
      subheading: "Browse tech Job listings on one page",
      description: "I needed a quick way to browse all available job postings on Itduunit.fi. After some research, I found Duunitori’s open, free-to-use API and built an app that fetches all job postings from their site and presents them without any unnecessary bloat. This taught me about fetching large amounts of data in small pieces to speed up load times.",
      videourl: "https://www.youtube.com/embed/PY5Um1g69vc?mute=1&autoplay=1&loop=1&playlist=PY5Um1g69vc",
      demolink: "https://tech-jobs-finland.netlify.app",
      githublink: "https://github.com/shoutcape/Tech-Jobs-Finland"
    },
    {
      name: "Forum application",
      subheading: "Login, post, delete and read",
      description: "I wanted to learn more about user creation and authentication methods, so as part of the Laurea’s Javascript course I used javascript, html, css and Firebase to create a forum application that fulfills the basics of CRUD. I learned a lot about user authentication and also dabbeled a bit in the creation of svgs and animation.",
      videourl: "https://www.youtube.com/embed/bai7F73Mq8I?mute=1&autoplay=1&loop=1&playlist=bai7F73Mq8I",
      demolink: "https://forumapplication.netlify.app/",
      githublink: "https://github.com/shoutcape/ForumApp"
    },
    {
      name: "Meal App",
      subheading: "Find new food recipes",
      description: "Inspired from the Cocktail App I made previously, I decided to create a meal application, this time by using vanilla javascript with html and css. The app offers a responsive search and is quite fast at providing the user with new data.",
      videourl: "https://www.youtube.com/embed/2gW1KH8dFOA?mute=1&autoplay=1&loop=1&playlist=2gW1KH8dFOA",
      demolink: "https://meal-application-project.netlify.app/",
      githublink: "https://github.com/shoutcape/MealApp"
    },
    {
      name: "Cocktail App",
      subheading: "Search cocktails by name or ingredient",
      description: "I created an app to find inspiration for different drinks and cocktails. I used a free API by TheCocktailDB.com to fetch the queried cocktails. I also added a button that will provide the user with a random cocktail. This project was made with Ionic framework as part of the Mobile Applications Course at Laurea.",
      videourl: "https://www.youtube.com/embed/GxumlMMaZD8?mute=1&autoplay=1&loop=1&playlist=GxumlMMaZD8",
      demolink: "https://cocktailapplication.netlify.app/",
      githublink: "https://github.com/shoutcape/CocktailApp"
    },
    {
      name: "Canvas Automation Project",
      subheading: "Return school assignments with a click of a button",
      description: "As a part of my school`s RPA course I wanted to make an app that would allow me to return multiple school assignments at once. I used PyQt for the UI, Selenium in combination with Robot Framework for the automation. I learned a lot about automation and how installable apps are made.",
      videourl: "https://www.youtube.com/embed/vPb5qMqwoD4?mute=1&autoplay=1&loop=1&playlist=vPb5qMqwoD4",
      demolink: null,
      githublink: "https://github.com/shoutcape/Canvas_Automation_Project"
    }
  ]

  return (
    <div className='mt-10 flex flex-col items-center'>
      <h2 className='text-3xl mb-10'>Projects</h2>

      {projectList.map((project, index) => (
        <div key={index} className={index % 2 == 0 ? styles.projectContainer : styles.projectContainerReverse}>
          <div className={`${styles.textContainer}`}>
            <h2 className='text-3xl'>{project.name}</h2>
            <h3 className='text-lg text-end-10 pb-5'>{project.subheading}</h3>
            <p className='text-xl'>{project.description}</p>
            <div className={`${styles.linksContainer}`}>
              {project.demolink && 
                <a role='button' href={project.demolink} target='_blank' className='btn btn-accent p-4'>Live Demo</a>
              }
              <a href={project.githublink} target='_blank'>
                <GithubSVG className='w-12 h-12 fill-base-content' />
              </a>
            </div>
          </div>
          <div className={`${styles.previewContainer}`}>
            <iframe className='w-full h-full' src={project.videourl} />
          </div>
        </div>
      ))}
    </div >
  )
}

export default Projects
