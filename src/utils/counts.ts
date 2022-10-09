export const countAge = (birthday: Date | null, deathday: Date | null) => {
  if (!birthday) return;
  return (deathday || new Date()).getFullYear() - birthday.getFullYear();
};
