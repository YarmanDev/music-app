import React from 'react';
import { ISinger } from '../types';
import styled from 'styled-components';
import { Image, Text } from './';
import { useNavigate } from 'react-router-dom';
import { countAge } from '../utils';

interface LargePreviewSingerProps extends ISinger {}

export const LargePreviewSinger = (props: LargePreviewSingerProps) => {
  const {
    pseudonym,
    ava,
    beginningCareer,
    endCareer,
    birthday,
    deathday,
    musicsId,
  } = props;
  const navigate = useNavigate();
  const showYearActivities = () =>
    `${beginningCareer} - ${
      endCareer === new Date().getFullYear() ? 'present' : endCareer
    }`;
  return (
    <Container onClick={() => navigate(`/singers/${encodeURI(pseudonym)}`)}>
      <Avatar src={ava} alt={'ava'} />
      <Info>
        <PseudonymAge>
          <CustomPseudonym cutText>{pseudonym}</CustomPseudonym>
          {birthday && <Age>{countAge(birthday, deathday)} ages</Age>}
        </PseudonymAge>
        <Text>{showYearActivities()}</Text>
        <Text>{`Total songs: ${musicsId.length}`}</Text>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: stretch;
`;
const Avatar = styled(Image)`
  height: 100px;
  border-radius: 50%;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0 0 15px;
`;
const PseudonymAge = styled.div`
  display: flex;
`;
const Age = styled(Text)`
  white-space: nowrap;
`;
const CustomPseudonym = styled(Text)`
  text-transform: capitalize;
  padding: 0 10px 0 0;
`;
