import { motion } from 'framer-motion';
import { projectsData } from '../utils/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { fadeInGrow, sectionVariants, headingVariants, projectCardVariants } from '../utils/variants';

export default function Projects() {
  const projectsToDisplay = projectsData.slice(0, 3);

  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 px-4 md:px-8 text-slate-700 flex flex-col items-center justify-center relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-sky-600 mb-12 text-center z-10"
        variants={headingVariants}
      >
        项目经历
      </motion.h2>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectsToDisplay.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white/75 border border-slate-200 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
            variants={projectCardVariants}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent"></div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4"
                variants={fadeInGrow}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
              </motion.div>
            </div>

            <div className="p-4 flex flex-col justify-between h-auto">
              <p className="text-slate-600 text-base mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-sky-600 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-end space-x-4 mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-600 transition-colors duration-200 flex items-center"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-600 transition-colors duration-200 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {projectsData.length > 3 && (
        <motion.a
          href="https://github.com/Gojer16"
          className="mt-12 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          View All Projects
        </motion.a>
      )}
    </motion.section>
  );
}