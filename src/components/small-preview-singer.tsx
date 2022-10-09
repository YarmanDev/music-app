import React from 'react';
import styled from 'styled-components';
import { Text, Image } from './';
import { CustomLink } from '../assets';

interface SmallPreviewSingerPops {
  pseudonym: string;
  ava: string;
  className?: string;
}

export const SmallPreviewSinger = (props: SmallPreviewSingerPops) => {
  const { ava, pseudonym, className } = props;
  return (
    <CustomLink to={`/singers/${encodeURI(pseudonym)}`}>
      <Singer className={className}>
        <Avatar src={ava} alt={'ava'} />
        <Text cutText>{pseudonym}</Text>
      </Singer>
    </CustomLink>
  );
};

const Singer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  text-transform: capitalize;
  text-align: center;
`;
const Avatar = styled(Image)`
  height: 90px;
  width: 90px;
  border-radius: 50px;
`;
