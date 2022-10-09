import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { SINGERS, SONGS } from '../../constants';
import { Player, Text, Image, Triangle } from '../../components';

export const Song = () => {
  const { id } = useParams();
  const song = SONGS.find((song) => song.name === id);
  const singers = SINGERS.filter((singer) =>
    song?.singerId.includes(singer.id),
  );
  const singersPseudonym = singers.map(({ pseudonym }) => pseudonym);
  if (!song || !singers) {
    return <DefunctUser>{`Song ${id} does not exist`}</DefunctUser>;
  }
  return (
    <Container>
      <SingersAvatars>
        {singers.map(({ id, ava }) => (
          <Avatar key={id} src={ava} alt={'ava'} />
        ))}
      </SingersAvatars>
      <Pseudonym>{singersPseudonym.join(', ')}</Pseudonym>
      <CustomPlayer name={song.name} playbackTime={song.playbackTime} />
      <ButtonPlayer>
        <ChangeSong>
          <Triangle side={'left'} />
          <Line width={3} />
        </ChangeSong>
        <Pause>
          <Line width={3} />
          <Line width={3} />
        </Pause>
        <ChangeSong>
          <Line width={3} />
          <Triangle side={'right'} />
        </ChangeSong>
      </ButtonPlayer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  margin: 20px 0;
  padding: 30px 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.primary};
`;
const DefunctUser = styled(Text)`
  padding: 30px 0 0 0;
  text-align: center;
`;
const SingersAvatars = styled.div`
  display: flex;
  overflow-y: auto;
  column-gap: 20px;
  margin: 0 20px;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const Avatar = styled(Image)`
  height: 200px;
  margin: 0 auto;
  border-radius: 8px;
`;
const Pseudonym = styled(Text)`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
  text-transform: capitalize;
`;
const CustomPlayer = styled(Player)`
  padding: 40px 0 0;
`;
const ButtonPlayer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
  column-gap: 20px;
`;
const ChangeSong = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2px;
  border-radius: 50%;
`;
const Pause = styled.div`
  height: 42px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  column-gap: 6px;
`;
const Line = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 18px;
  background: ${({ theme }) => theme.colors.contrast};
  border-radius: 4px;
`;
