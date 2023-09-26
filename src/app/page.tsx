'use client';
import React, { FC, useEffect, useRef } from 'react';

import { TopHero } from './components';

import '@/global/global.css';
import '@/global/cursor.css';
import cls from './page.module.scss';

interface PageProps {}

const Page: FC<PageProps> = () => {
  const mouse = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseCursor = mouse.current;
    let navH1 = document.querySelector('h1');

    window.addEventListener('mousemove', e => {
      if (mouseCursor) {
        mouseCursor.style.top = `${e.pageY}px`;
        mouseCursor.style.left = `${e.pageX}px`;
      }
    });
    navH1?.addEventListener('mouseover', e => {
      mouseCursor?.classList.add('mouse-grow');
    });
    navH1?.addEventListener('mouseleave', e => {
      mouseCursor?.classList.remove('mouse-grow');
    });
  }, []);
  return (
    <>
      <div ref={mouse} className="cursor" />
      <div className={cls.wrapper}>
        <TopHero />
      </div>
    </>
  );
};

export default Page;
