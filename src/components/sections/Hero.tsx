import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import { styles } from '../../constants/styles';
import { ComputersCanvas } from '../canvas';
import { config } from '../../constants/config';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>

        {/* Profile Picture Section - Creative Design */}
        <div className="hidden lg:flex flex-col items-center justify-center ml-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] via-[#804dee] to-[#915EFF] p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>

            {/* Profile Picture Container */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-2xl">
              <img
                src="/profile-pic.svg"
                alt="Uzair Farooq"
                className="w-full h-full object-cover"
                onError={e => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzkxNUVGRiIvPgo8cGF0aCBkPSJNNTAgMTQwIFE1MCAxMjAgMTAwIDEyMCBRMTUwIDEyMCAxNTAgMTQwIEwxNTAgMTYwIEw1MCAxNjAgWiIgZmlsbD0iIzkxNUVGRiIvPgo8L3N2Zz4K';
                }}
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-[#915EFF] rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs">💻</span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#804dee] rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Mobile Profile Picture and Text - Different Design */}
      {isMobile && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-sm"
          >
            {/* Mobile Profile Picture */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-2xl mx-auto mb-6 relative z-20">
              <img
                src="/profile-pic.svg"
                alt="Uzair Farooq"
                className="w-full h-full object-cover"
                onError={e => {
                  e.currentTarget.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjMzMzIi8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDUiIHI9IjE5IiBmaWxsPSIjOTE1RUZGIi8+CjxwYXRoIGQ9Ik0zMiA5MCBRMzIgNzcgNjQgNzcgUTk2IDc3IDk2IDkwIEw5NiAxMDIgTDMyIDEwMiBaIiBmaWxsPSIjOTE1RUZGIi8+Cjwvc3ZnPgo=';
                }}
              />
            </div>

            {/* Mobile Text Content with Background */}
            <div className="relative z-20 text-center">
              {/* Text Background for better visibility */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl -m-4"></div>

              <div className="relative px-6 py-4">
                <h1 className="text-white text-3xl font-black mb-3 drop-shadow-lg">
                  Hi, I'm <span className="text-[#915EFF] drop-shadow-lg">{config.hero.name}</span>
                </h1>
                <p className="text-[#dfd9ff] text-base font-medium leading-relaxed drop-shadow-md">
                  {config.hero.p[0]} {config.hero.p[1]}
                </p>
              </div>
            </div>

            {/* Mobile Floating Elements */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-[#915EFF] rounded-full flex items-center justify-center shadow-lg z-30"
            >
              <span className="text-white text-xs">💻</span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#804dee] rounded-full flex items-center justify-center shadow-lg z-30"
            >
              <span className="text-white text-xs">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      )}

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
