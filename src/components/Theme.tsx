"use client"
// import { HeaderMenu } from './components/Header/Header';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { ReactNode, useState } from 'react';

export default function Theme({ children }: { children: ReactNode }) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

