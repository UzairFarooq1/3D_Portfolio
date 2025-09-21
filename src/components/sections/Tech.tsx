import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {technologies.map(technology => (
          <div
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 flex-shrink-0"
            key={technology.name}
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
