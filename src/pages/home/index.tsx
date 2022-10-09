import React from 'react';
import { Link } from 'react-router-dom';
import { SONGS, SINGERS, PLAYLISTS } from '../../constants';
import styled from 'styled-components';
import {
  Text,
  SmallPreviewSinger,
  PreviewSong,
  PreviewPlaylist,
} from '../../components';
import { CustomLink } from '../../assets';

export const Home = () => {
  return (
    <Container>
      <ContainerItem>
        <TitleItem>
          <Text>Popular singers&ensp;</Text>
          <CustomLink to={'/singers'}>
            <TitleHighlight as={'span'}>sell all</TitleHighlight>
          </CustomLink>
        </TitleItem>
        <WrapperItems>
          {SINGERS.slice(0, 8).map((singer) => (
            <CustomSmallPreviewSinger key={singer.id} {...singer} />
          ))}
        </WrapperItems>
      </ContainerItem>
      <ContainerItem>
        <TitleItem>
          <Text>Popular songs&ensp;</Text>
          <CustomLink to={'/songs'}>
            <TitleHighlight as={'span'}>sell all</TitleHighlight>
          </CustomLink>
        </TitleItem>
        <WrapperItems>
          {SONGS.slice(10, 14).map((song) => (
            <CustomPreviewSong key={song.id} {...song} />
          ))}
        </WrapperItems>
      </ContainerItem>
      <ContainerItem>
        <TitleItem>
          <Text>Playlists</Text>
        </TitleItem>
        <WrapperItems>
          {Object.entries(PLAYLISTS).map(([key, value]) => (
            <CustomLink key={key} to={`/playlists/${encodeURI(key)}`}>
              <PreviewPlaylist name={key} songsID={value.slice(0, 4)} />
            </CustomLink>
          ))}
        </WrapperItems>
      </ContainerItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const TitleHighlight = styled(Text)`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 16px;
`;
const ContainerItem = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
`;
const WrapperItems = styled.div`
  display: flex;
  align-items: stretch;
  column-gap: 20px;
  overflow-y: auto;
  padding: 15px 0 0 0;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const CustomSmallPreviewSinger = styled(SmallPreviewSinger)`
  max-width: 115px;
`;
const CustomPreviewSong = styled(PreviewSong)`
  max-width: 200px;
`;
