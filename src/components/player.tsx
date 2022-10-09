import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../assets';
import { Text } from '../components';
import { convertSecondsTOMinutes } from '../utils';

interface PlayerProps {
  name: string;
  playbackTime: number;
  className?: string;
}

export const Player = (props: PlayerProps) => {
  const { name, playbackTime, className } = props;
  const [currentSecond, setCurrentSecond] = useState(45);
  return (
    <Container className={className}>
      <Wrapper>
        <ContainerPlayer>
          <NameSong cutText>{name}</NameSong>
          <Progress>
            <Time textAlign={'left'}>
              {convertSecondsTOMinutes(currentSecond)}
            </Time>
            <WrapperLine>
              <ActiveLine width={(currentSecond * 100) / playbackTime} />
            </WrapperLine>
            <Time textAlign={'right'}>
              {convertSecondsTOMinutes(playbackTime)}
            </Time>
          </Progress>
        </ContainerPlayer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;
const ContainerPlayer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameSong = styled(Text)`
  text-transform: capitalize;
  text-align: center;
`;
const Progress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0 0 0;
`;
const Time = styled(Text)<{ textAlign: 'left' | 'right' }>`
  text-align: ${({ textAlign }) => textAlign};
`;
const WrapperLine = styled.div`
  height: 6px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.contrast};
`;
const ActiveLine = styled.div<{ width: number }>`
  height: 7px;
  transform: translateX(-1px);
  width: ${({ width }) => width}%;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`;
