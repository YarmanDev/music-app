import React from 'react';
import styled from 'styled-components';
import { getSingersBySongId } from '../utils';
import { SINGERS } from '../constants';
import { Image, Text } from './';

export const PreviewPlaylist = (props: PreviewPlaylistProps) => {
  const { songsID, name, className } = props;
  const singers = getSingersBySongId(SINGERS, songsID);
  return (
    <Container className={className}>
      {singers.map(({ id, ava }) => (
        <CustomImage key={id} src={ava} alt={'ava'} />
      ))}
      <NameList>{name}</NameList>
    </Container>
  );
};

interface PreviewPlaylistProps {
  songsID: number[];
  name: string;
  className?: string;
}

const Container = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 5px;
`;
const CustomImage = styled(Image)`
  height: 90px;
  width: 90px;
`;
const NameList = styled(Text)`
  text-transform: capitalize;
`;
