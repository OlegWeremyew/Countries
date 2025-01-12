import React, { FC, useEffect, useMemo, useState } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { HeaderElement, ModeSwitcher, Title, Wrapper } from './components';
import { Container } from 'layout';

import type { Nullable } from 'types';
import type { IconType } from 'react-icons';
import { ThemeType } from 'enums';

export const Header: FC = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.DARK);

  useEffect(() => {
    let themeAsString: Nullable<string> = localStorage.getItem('theme');
    themeAsString && setTheme(JSON.parse(themeAsString));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));

    document.body.setAttribute('data-theme', theme);

    const metaThemeColor: Nullable<Element> = document.querySelector(
      'meta[name="theme-color"]',
    );

    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        theme === ThemeType.DARK ? '#000000' : '#ffffff', // Цвет для светлой и темной темы
      );
    }
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(
      (prevTheme: ThemeType): ThemeType =>
        prevTheme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT,
    );
  };

  const Icon: IconType = useMemo(
    () => (theme === ThemeType.DARK ? IoMoon : IoMoonOutline),
    [theme],
  );

  return (
    <HeaderElement id="header">
      <Container>
        <Wrapper>
          <Title>Where is the world</Title>
          <ModeSwitcher onClick={toggleTheme}>
            <Icon size="14px" />
            <span style={{ marginLeft: '0.75rem' }}> {theme} theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
