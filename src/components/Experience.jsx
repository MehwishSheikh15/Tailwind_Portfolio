
import { motion } from "framer-motion";
const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "GIAIC.",
    description: `Developed responsive user interfaces using HTML, CSS, JavaScript, TypeScript ,Tailwind CSS and Next.js to enhance user experience across devices.
Conducted code reviews to ensure high coding standards and maintainability.
Leveraged Next.js for improved performance and SEO while maintaining project documentation for team collaboration.`,
    technologies: ["Javascript", "React.js", "Next.js", "Figma", "Typescript"],
  },
  {
    year: "2024 - Present",
    role: "Sales and Marketing",
    company: "Advanced Digitizing ",
    description: `Results-driven sales and marketing expert with 8 months of experience driving revenue growth, managing international clients, and delivering exceptional customer service remotely

Consistently exceeded sales targets by 90%, driving revenue growth and expanding market share
Built and maintained strong relationships with clients, ensuring high customer satisfaction.`,
    technologies: ["Opera", "Google", "Gmail"],
  },
  {
    year: "2022 - Present",
    role: "Teaching",
    company: "The Grammer School",
    description: `My teaching philosophy centers on creating a supportive environment where students feel empowered to explore and succeed.`,
    technologies: ["Youtube", "Google", "Zoom"],
  },
 
];


const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
            <div 
            key={index} className="mb-8 flex-wrap lg:justify-center">
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                </motion.div>
               <motion.div 
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 1 }}
               className="w-full max-w-xl lg:w-3/4">
               <h6  className="mb-2 font-semibold">
                {experience.role} -{" "} 
                <span className="text-sm text-purple-100">{experience.company}</span>
               </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900
                px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
              )
              )}
               </motion.div> 
            </div>
        ))}
        </div>
        </div>
  )
}

export default Experience