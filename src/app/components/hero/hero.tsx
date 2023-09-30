import React, { FC } from 'react';
import cx from 'classnames';
import Image from 'next/image';

import cls from './hero.module.scss';

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <div className={cls.wrapper}>
    <div className={cls.container}>
      <div className={cls.left}>
        {/* <Image
          src="/images/hero/left.webp"
          alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
          fill
          priority
          placeholder="blur"
          blurDataURL="/images/hero/right.webp"
          sizes="(min-width: 920px) 49.52vw, 100vw"
        /> */}
        <div className={cls['left-container']}>
          <h2 className={cls.title}>Salom, Shaxsiy Blog sahifamga xush kelibsiz .</h2>
          <p className={cls.description}>
            Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir
            nechta muvaffaqiyatli loyiharni amalga oshirdim.
          </p>
          <button className={cls.btn}>
            <div className={cx(cls['btn-block'])}>
              Projects <span>{`->`}</span>
            </div>
          </button>
        </div>
      </div>
      <div className={cls.right}>
        {/* <Image
          src="/images/hero/right.webp"
          alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
          fill
          priority
          placeholder="blur"
          blurDataURL="/images/hero/right.webp"
          sizes="(min-width: 920px) 49.52vw, 100vw"
        /> */}
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
          <Image
            src="/images/hero/3x.svg"
            alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
            width={215}
            height={174}
            priority
            placeholder="blur"
            className={cls['custom-shapes']}
            blurDataURL="/images/hero/3x.svg"
            sizes="(min-width: 920px) 49.52vw, 100vw"
          />
          <div className={cls.card}>
            <Image
              src="/images/hero/X.svg"
              alt="Mening ismim Xushnudbek. Men 2 yildan ortiq Frontend  Devloper bo’lib faoliyat yuritaman. Bu oraliqda bir nechta muvaffaqiyatli loyiharni amalga oshirdim"
              width={32}
              height={30}
              priority
              placeholder="blur"
              blurDataURL="/images/hero/X.svg"
              sizes="(min-width: 920px) 49.52vw, 100vw"
            />
            <h4 className={cls['card-title']}>Xushnudbek</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
