import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PLAYLISTS, SONGS } from '../../constants';
import { PreviewSong, Text } from '../../components';
import { IPlaylists } from '../../types';
import { getSongsByIds } from '../../utils';

export const PlayLists = () => {
  const { id } = useParams();
  const playlist = PLAYLISTS[id as keyof IPlaylists];
  if (id === undefined) {
    return <Text>{`Playlist ${playlist} does not exist`}</Text>;
  }
  const songs = getSongsByIds(SONGS, playlist);
  return (
    <Container>
      <Title>{id}</Title>
      <Songs>
        {songs.map((song) => (
          <PreviewSong key={song.id} {...song} />
        ))}
      </Songs>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0 0 0;
`;
const Title = styled(Text)`
  font-size: 20px;
  text-transform: capitalize;
  padding: 0 0 20px 0;
`;
const Songs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
