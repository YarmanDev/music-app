export const convertSecondsTOMinutes = (allSeconds: number) => {
  if (allSeconds <= 0) return '0 sec';
  const minutes = Math.floor(allSeconds / 60);
  const seconds = (allSeconds - minutes * 60).toFixed().padStart(2, '0');
  return `${minutes}:${seconds}`;
};
