import { ISinger, ISong } from '../types';

export const getSingersBySongId = (list: ISinger[], singersID: number[]) =>
  list.filter((singer) => singersID.includes(singer.id));

export const getSongsByIds = (songs: ISong[], list: number[]) =>
  songs.filter((singer) => list.includes(singer.id));
