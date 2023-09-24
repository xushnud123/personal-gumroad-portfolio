"use client";
import { useEffect } from "react";

import cls from "./page.module.scss";

export default function Home() {
  return (
    <main className={cls.wrapper}>
      <div className={cls.container}></div>
      <div className={cls.container}>
        <div className={cls.left}>hi</div>
        <div className={cls.right}>
          <div className={cls.card}>1</div>
          <div className={cls.card}>2</div>
          <div className={cls.card}>3</div>
        </div>
      </div>
      <div className={cls.container}></div>
    </main>
  );
}
