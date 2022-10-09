import React, { useState } from 'react';
import { SINGERS } from '../../constants';
import { Input, Text } from '../../components';
import { LargePreviewSinger } from '../../components';
import styled from 'styled-components';

export const Singers = () => {
  const [value, setValue] = useState('');
  const filterSingers = () =>
    SINGERS.filter((singer) =>
      singer.pseudonym.toLowerCase().includes(value.toLowerCase()),
    );
  return (
    <Container>
      <Title>All Singers</Title>
      <Input
        value={value}
        onChange={(value) => setValue(value)}
        placeholder={'search'}
      />
      <ContainerPreviewSinger>
        {filterSingers().map((singer) => (
          <LargePreviewSinger key={singer.id} {...singer}></LargePreviewSinger>
        ))}
      </ContainerPreviewSinger>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0 0 0;
  display: flex;
  flex-direction: column;
`;
const ContainerPreviewSinger = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px 0 0;
`;
const Title = styled(Text)`
  padding: 0 0 10px 0;
  font-size: 18px;
`;
