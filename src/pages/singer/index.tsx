import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { SINGERS, SONGS } from '../../constants';
import { PreviewSong, Image, Text } from '../../components';
import { countAge } from '../../utils';

export const Singer = () => {
  const { id } = useParams();
  const singer = SINGERS.find((singer) => singer.pseudonym === id);
  const songs = SONGS.filter((song) => singer?.musicsId.includes(song.id));
  const showYearActivities = () =>
    singer &&
    `${singer.beginningCareer} - ${
      singer.endCareer === new Date().getFullYear()
        ? 'present'
        : singer.endCareer
    }`;
  if (!singer) {
    return <DefunctUser>{`User ${id} does not exist`}</DefunctUser>;
  }
  return (
    <Container>
      <TitleSinger>{singer.pseudonym}</TitleSinger>
      <WrapperProfile>
        <Avatar src={singer.ava} alt={'ava'} />
        <WrapperInfo>
          <CustomText cutText>FullName: {singer.fullName}</CustomText>
          {singer.birthday && (
            <CustomText cutText>
              Age: {countAge(singer.birthday, singer.deathday)}
            </CustomText>
          )}
          <CustomText cutText>Active years: {showYearActivities()}</CustomText>
          <CustomText cutText>Genres: {singer.genres.join(', ')}</CustomText>
        </WrapperInfo>
      </WrapperProfile>
      <TitleSongs>{`${singer.pseudonym}'s songs`}</TitleSongs>
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
const DefunctUser = styled(Text)`
  padding: 30px 0 0 0;
  text-align: center;
`;
const TitleSinger = styled(Text)`
  font-size: 20px;
  text-transform: capitalize;
`;
const Avatar = styled(Image)`
  width: 30%;
  border-radius: 8px;
`;
const TitleSongs = styled(Text)`
  padding: 30px 0 0;
  font-size: 18px;
  text-transform: capitalize;
`;
const Songs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0 0;
`;
const WrapperProfile = styled.div`
  display: flex;
  margin: 10px 0 0;
`;
const WrapperInfo = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 0 0 15px;
  row-gap: 5px;
`;
const CustomText = styled(Text)`
  text-transform: capitalize;
`;
