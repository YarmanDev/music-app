import React from 'react';
import styled from 'styled-components';
import { ISinger } from '../types';
import { Text, Triangle } from '../components';
import { useNavigate } from 'react-router-dom';
import { getSingersBySongId, convertSecondsTOMinutes } from '../utils';
import { SINGERS } from '../constants';
import { CustomLink } from '../assets';

interface SmallPreviewSongProps {
  name: string;
  playbackTime: number;
  singerId: number[];
  className?: string;
}

export const PreviewSong = (props: SmallPreviewSongProps) => {
  const navigate = useNavigate();
  const { name, playbackTime, singerId, className } = props;
  const showSingersByComma = (list: ISinger[]) =>
    list.map(({ pseudonym }, index) => (
      <CustomLink key={pseudonym} to={`/singers/${encodeURI(pseudonym)}`}>
        {pseudonym}
        {list.length - 1 !== index && ','}&ensp;
      </CustomLink>
    ));
  return (
    <Song className={className} onClick={() => navigate(`/songs/${name}`)}>
      <Wrapper>
        <NameSong cutText>{name}</NameSong>
        <PlayMusic>
          <PlaybackTimeSong cutText>
            {convertSecondsTOMinutes(playbackTime)}
          </PlaybackTimeSong>
          <Triangle side={'right'} />
        </PlayMusic>
      </Wrapper>
      <Singers cutText>
        {showSingersByComma(getSingersBySongId(SINGERS, singerId))}
      </Singers>
    </Song>
  );
};

const Song = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  border-radius: 8px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NameSong = styled(Text)`
  text-transform: capitalize;
  padding: 0 20px 0 0;
`;
const PlayMusic = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 5px 7px;
  border-radius: 8px;
`;
const PlaybackTimeSong = styled(Text)`
  font-size: 14px;
  margin: 0 10px 0 0;
`;
const Singers = styled(Text)`
  font-size: 14px;
  text-transform: capitalize;
  padding: 10px 0 0 0;
`;
