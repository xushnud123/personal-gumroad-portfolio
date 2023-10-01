'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import { Hero, Navbar } from './components';

import cls from './page.module.scss';

const TopHero = dynamic(() => import('./components/top-hero/top-hero'));

interface PageProps {}

const Page: FC<PageProps> = () => {
  const mouse = useRef<HTMLDivElement>(null);
  const [cursorObservation, setCursorObservation] = useState(true);

  useEffect(() => {
    let mouseCursor = mouse.current;
    let navH1 = document.querySelector('h1');
    let cursorFull = document.querySelectorAll('.custom-cursor-full');

    const setPosition = (e: MouseEvent) => {
      if (mouseCursor && !mouseCursor.classList.contains('mouse-li')) {
        mouseCursor.style.top = `${e.pageY}px`;
        mouseCursor.style.left = `${e.pageX}px`;
      }
    };

    window.addEventListener('mousemove', e => setPosition(e));
    navH1?.addEventListener('mouseover', e => {
      mouseCursor?.classList.add('mouse-grow');
    });
    navH1?.addEventListener('mouseleave', e => {
      mouseCursor?.classList.remove('mouse-grow');
    });

    cursorFull.forEach(item => {
      item?.addEventListener('mouseover', e => {
        mouseCursor?.classList.add('mouse-li');
        setCursorObservation(false);

        if (item && mouseCursor) {
          mouseCursor.style.top = `${item.getBoundingClientRect()?.top - 2}px`;
          mouseCursor.style.left = `${item.getBoundingClientRect()?.left}px`;
          mouseCursor.style.right = `${item.getBoundingClientRect()?.left + item.getBoundingClientRect()?.left}px`;
          mouseCursor.style.bottom = `${item.getBoundingClientRect()?.top + item.getBoundingClientRect()?.height}px`;
          mouseCursor.style.width = `${item.getBoundingClientRect()?.width}px`;
          mouseCursor.style.height = `${item.getBoundingClientRect()?.height + 4}px`;
        }
      });
      item?.addEventListener('mouseleave', e => {
        mouseCursor?.classList.remove('mouse-li');
        if (item && mouseCursor) {
          setCursorObservation(false);
          mouseCursor.style.width = '3rem';
          mouseCursor.style.height = '3rem';
        }
      });
    });
    return () => {
      window.removeEventListener('mousemove', e => setPosition(e));
    };
  }, [cursorObservation]);

  return (
    <>
      {/* <div ref={mouse} className="cursor" /> */}
      <div className={cls.wrapper}>
        <div className={cls.top}>
          <TopHero />
        </div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Page;
