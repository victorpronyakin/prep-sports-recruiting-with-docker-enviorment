export const textSlicer = (text, limit) => {
  text = text.trim();
  if (text.length <= limit) return text;
  text = text.slice(0, limit);
  const lastSpace = text.lastIndexOf(" ");
  if (lastSpace > 0) {
    text = text.substr(0, lastSpace);
  }
  return text + "...";
};
