'use client';
import React, { FC, useRef } from 'react';
import cx from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import cls from './hero.module.scss';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: scrollYProgressTitle } = useScroll({ target: titleRef, offset: ['1 0', 'end center'] });
  const { scrollYProgress: scrollYProgressDescription } = useScroll({
    target: descriptionRef,
    offset: ['1 0', 'end center']
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 30]);
  const leftTittle = useTransform(scrollYProgressTitle, [1, 0], [0, -50]);
  const leftDescription = useTransform(scrollYProgressDescription, [1, 0], [0, -50]);
  // const opacity = useTransform(scrollYProgressTitle, [0, 1], [50, -50]);

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.left}>
          <Image
            src="/images/bg/dot.png"
            alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
            fill
            priority
            placeholder="blur"
            style={{ objectFit: 'cover' }}
            blurDataURL="/images/bg/dot.webp"
            sizes="(min-width: 920px) 49.52vw, 100vw"
          />
          <div className={cls['left-container']}>
            <motion.h2
              ref={titleRef}
              animate={{ transition: { duration: 0.5, ease: 'easeIn', type: 'spring' } }}
              style={{ opacity: scrollYProgressTitle, translateY: leftTittle }}
              className={cls.title}
            >
              Salom, Shaxsiy Blog sahifamga xush kelibsiz .
            </motion.h2>
            <motion.p
              ref={descriptionRef}
              animate={{ transition: { duration: 0.3, ease: 'easeIn', type: 'spring' } }}
              style={{ opacity: scrollYProgressDescription, translateY: leftDescription }}
              className={cls.description}
            >
              Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir
              nechta muvaffaqiyatli loyiharni amalga oshirdim.
            </motion.p>
            <button className={cls.btn}>
              <div className={cx(cls['btn-block'])}>
                Projects <span>{`->`}</span>
              </div>
            </button>
          </div>
        </div>
        <div className={cls.right}>
          <Image
            src="/images/bg/line.webp"
            alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
            fill
            priority
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="/images/bg/line.webp"
            sizes="(min-width: 920px) 49.52vw, 100vw"
          />
          <div className={cls['right-container']}>
            <Image
              src="/images/hero/person.svg"
              alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
              width={354}
              height={400}
              priority
              placeholder="blur"
              blurDataURL="/images/hero/person.svg"
              sizes="(min-width: 920px) 49.52vw, 100vw"
            />
            <motion.div style={{ translateY: y }} className={cls['custom-shapes']}>
              <Image
                src="/images/hero/3x.svg"
                alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
                width={215}
                height={174}
                priority
                placeholder="blur"
                blurDataURL="/images/hero/3x.svg"
                sizes="(min-width: 920px) 49.52vw, 100vw"
              />
            </motion.div>
            <motion.div style={{ translateY: y2 }} className={cls.card}>
              <Image
                src="/images/hero/X.svg"
                alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
                width={32}
                height={30}
                priority
                blurDataURL="/images/hero/X.svg"
                sizes="(min-width: 920px) 49.52vw, 100vw"
              />
              <h4 className={cls['card-title']}>Xushnudbek</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
