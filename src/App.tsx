import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { breakpoints, light, dark } from './constants';
import { IThemeColors, IThemes } from './types';
import { Header, Player } from './components';
import { GlobalStyle, Wrapper } from './assets';
import { Route, Routes } from 'react-router-dom';
import { Home, NotFound, Songs, Song, Singers, Singer } from './pages';
import { PlayLists } from './pages/playlists';
import { useLocation, matchRoutes } from 'react-router-dom';

const colors = {
  light,
  dark,
} as IThemes;

interface IPlayerOptions {
  open: boolean;
  name: string;
  playbackTime: number;
}

const forbiddenShowPlayerOnPages = [{ path: '/songs/:id' }];
export default function App() {
  const [theme, setTheme] = useState<IThemeColors>('dark');
  const [playerOptions, setPlayerOptions] = useState<IPlayerOptions>({
    open: true,
    name: 'another one bites the dust',
    playbackTime: 214,
  });
  const location = useLocation();
  const showPlayer = matchRoutes(forbiddenShowPlayerOnPages, location);
  return (
    <ThemeProvider theme={{ breakpoints, colors: colors[theme] }}>
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme} />
      <Wrapper
        padding={playerOptions.open && !showPlayer ? '0 10px 60px' : '0 10px'}
      >
        <Routes>
          <Route index path={'/'} element={<Home />} />
          <Route path={'singers'} element={<Singers />} />
          <Route path={'singers/:id'} element={<Singer />} />
          <Route path={'playlists/:id'} element={<PlayLists />} />
          <Route path={'songs'} element={<Songs />} />
          <Route path={'songs/:id'} element={<Song />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Wrapper>
      {playerOptions.open && !showPlayer && (
        <CustomPlayer
          name={playerOptions.name}
          playbackTime={playerOptions.playbackTime}
        />
      )}
    </ThemeProvider>
  );
}

const CustomPlayer = styled(Player)`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 5px 0;
`;
