import React, { FC } from 'react';
import { motion } from 'framer-motion';

import cls from './top-hero.module.scss';

interface TopHeroProps {}

const TopHero: FC<TopHeroProps> = () => {
  const variants = {
    hidden: { y: 130 },
    visible: { y: 0 }
  };

  return (
    <>
      <h1 className={cls.wrapper}>
        {['X', 'U', 'S', 'H', 'N', 'U', 'D', 'B', 'E', 'K'].map((item, index) => (
          <motion.span
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            key={item}
          >
            {item}
          </motion.span>
        ))}
      </h1>
    </>
  );
};

export default TopHero;
