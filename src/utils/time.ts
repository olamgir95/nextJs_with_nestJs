export const calculateEstimatedTimeToRead = (text: string) => {
  const wpm = 60; // words per minutes
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
