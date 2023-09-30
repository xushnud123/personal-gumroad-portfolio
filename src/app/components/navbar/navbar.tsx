import React, { FC, useState } from 'react';
import cx from 'classnames';
import dynamic from 'next/dynamic';

import cls from './navbar.module.scss';

import { useWindowSize } from '@/hooks';

const TopHero = dynamic(() => import('../top-hero/top-hero'));

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const size = useWindowSize();
  const [active, setActive] = useState(false);

  return (
    <div className={cx(cls.wrapper, active && cls.active)}>
      <div className={cx(cls.container, active && cls.active)}>
        <div className={cls.top}>
          <TopHero />
        </div>
        <div className={cls.nav}>
          <ul className={cls['nav-ul']}>
            <li className={cx(cls['nav-li'], 'custom-cursor-full')}>About</li>
            <li className={cx(cls['nav-li'], 'custom-cursor-full')}>Projects</li>
            <li className={cx(cls['nav-li'], 'custom-cursor-full')}>Contact</li>
          </ul>
          <button className={cls.btn}>Resume</button>
        </div>
        {size[0] < 750 && <button className={cls['mobile-btn']} onClick={() => setActive(!active)} />}
      </div>
    </div>
  );
};

export default Navbar;
