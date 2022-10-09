import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, PreviewSong, Text } from '../../components';
import { SINGERS, SONGS } from '../../constants';
import { getSingersBySongId } from '../../utils';
import { ISinger } from '../../types';

export const Songs = () => {
  const [value, setValue] = useState('');

  const filterSongs = () =>
    SONGS.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase()),
    );
  return (
    <Container>
      <Title>All songs</Title>
      <Input
        value={value}
        onChange={(value) => setValue(value)}
        placeholder={'search'}
      />
      <ContainerSongs>
        {filterSongs().map((song) => (
          <PreviewSong key={song.id} {...song} />
        ))}
      </ContainerSongs>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0 0;
`;
const Title = styled(Text)`
  font-size: 18px;
  padding: 0 0 10px;
`;
const ContainerSongs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px 0 0;
`;
const Song = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
`;
const NameSong = styled(Text)`
  text-transform: capitalize;
`;
const Singers = styled(Text)`
  text-transform: capitalize;
  font-size: 14px;
`;
const Triangle = styled.div`
  height: 30px;
  width: 30px;
  background: ${({ theme }) => theme.colors.secondary};
`;
