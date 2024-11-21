import { motion } from "framer-motion";

const EDUCATION = [
  {
    year: "2022",
    degree: "Higher Secondary Certificate (FSc) - Pre-Medical",
    institution: "BAMM PECHS GOVT COLLEGE FOR WOMEN",
    description: `Completed my FSc with an A grade, focusing on pre-medical subjects including Biology, Chemistry, and Physics.`,
    achievements: ["Top 5% of class", "Active member of Science Society"],
  },
  {
    year: "2020",
    degree: "Secondary School Certificate (Matriculation)",
    institution: "THE GRAMMAR SCHOOL",
    description: `Graduated with an A+ grade, excelling in Mathematics, Science, and English while actively participating in extracurricular activities.`,
    achievements: ["Honor Roll", "Debate Competition Winner"],
  },
  {
    year: "Ongoing",
    degree: "BSCS (AI)",
    institution: "ILMA UNIVERSITY",
    description: `Currently pursuing a Bachelor's degree in Computer Science with a specialization in Artificial Intelligence.`,
    achievements: ["Dean's List", "AI Research Group Member"],
  },
  {
    year: "Ongoing",
    degree: "Artificial Intelligence Course",
    institution: "Governor Sindh Initiative",
    description: `Studying the fundamentals and advanced concepts of AI through the Governor's Sindh Initiative.`,
    achievements: ["AI Project Lead", "Course Completion Expected in 2024"],
  },
];

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {education.degree} -{" "}
                <span className="text-sm text-purple-100">
                  {education.institution}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
              {education.achievements.map((achievement, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {achievement}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
