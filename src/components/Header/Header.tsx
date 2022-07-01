import React, { FC, useEffect, useState } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { HeaderElement, ModeSwitcher, Title, Wrapper } from './components';
import { Container } from '../../layout';

export const Header: FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'dark' ? (
              <>
                <IoMoon size="14px" />{' '}
              </>
            ) : (
              <>
                <IoMoonOutline size="14px" />{' '}
              </>
            )}

            <span style={{ marginLeft: '0.75rem' }}>{theme} theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};
