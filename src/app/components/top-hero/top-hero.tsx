import React, { FC } from 'react';

import cls from './top-hero.module.scss';

interface TopHeroProps {}

const TopHero: FC<TopHeroProps> = () => <h1 className={cls.wrapper}>Xushnudbek</h1>;

export default TopHero;
