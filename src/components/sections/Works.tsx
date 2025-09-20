import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  projectLink,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full rounded-2xl object-cover" 
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, '_blank')}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className="mt-4 flex gap-3">
            {projectLink && (
              <button
                onClick={() => window.open(projectLink, '_blank')}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-semibold text-sm"
              >
                View Project
              </button>
            )}
            <button
              onClick={() => window.open(sourceCodeLink, '_blank')}
              className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold text-sm"
            >
              View Code
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const GitHubCard: React.FC<{ index: number }> = ({ index }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] border-2 border-purple-500 hover:border-purple-400 transition-colors">
          <div className="relative h-[230px] w-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <img src={github} alt="github" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-2">View More Projects</h3>
              <p className="text-secondary text-[14px] mb-4">
                Explore all my repositories and projects on GitHub
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => window.open('https://github.com/UzairFarooq1', '_blank')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
                >
                  Visit GitHub
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <p className="text-[14px] text-purple-300">#github</p>
            <p className="text-[14px] text-pink-300">#repositories</p>
            <p className="text-[14px] text-blue-300">#opensource</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        <GitHubCard index={projects.length} />
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
