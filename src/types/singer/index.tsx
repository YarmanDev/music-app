export interface ISinger {
  id: number;
  fullName: string;
  pseudonym: string;
  beginningCareer: number;
  endCareer: number;
  birthday: Date | null;
  deathday: Date | null;
  genres: string[];
  musicsId: number[];
  ava: string;
}
