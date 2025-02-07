import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { motion } from "framer-motion";
const PROJECTS = [
  {
    title: "Hello Message!",
    image: project1,
    description:
      "An engaging project that delivers personalized greetings, showcasing dynamic interaction and thoughtful design.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Nextjs"],
    sourceLink: "https://next-mehwish-helloworld.vercel.app/",
  },
  {
    title: "Resume",
    image: project2,
    description:
      "An engaging project that delivers personalized greetings, showcasing expertise and thoughtful design",
    technologies: ["HTML", "CSS", "Vercel", "Github"],
    sourceLink: "https://mehwish-resume.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Javascript"],
    sourceLink: "https://my-portfolio-dusky-alpha-21.vercel.app/",
  },
  {
    title: "Todo App",
    image: project4,
    description:
      "A platform for creating Created a feature-rich To-Do app with intuitive UI, task prioritization, and real-time synchronizationand publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Nextjs", "Typescript"],
    sourceLink: "https://todo-app-mehwish.vercel.app/",
  },
   {
    title: "Blog Website",
    image: project3,
    description:
      "A platform for creating Created a feature-rich To-Do app with intuitive UI, task prioritization, and real-time synchronizationand publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "TailwindCSS", "Nextjs", "Typescript" , "ShadCN"],
    sourceLink: "https://dynamic-blog-rose.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "A platform for creating Created a feature-rich To-Do app with intuitive UI, task prioritization, and real-time synchronizationand publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "TailwindCSS", "Nextjs", "Typescript" , "Figma" , "Sanity"],
    sourceLink: "https://comforty-web-nx82.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl">Projects
        </motion.h2>
    <div>
       {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
            <img 
            src={project.image} 
            width={150}
            height={150}
            alt={project.title} 
            className="mb-6 rounded"
            />
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((tech, index) => (
                <span 
                key={index}
                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >{tech}</span>
            ))}
            <a
  href={project.sourceLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500"
>
  View Source
</a>
            </motion.div>

        </div>
       ))}
    
    </div>    
    </div>
  )
}

export default Projects
