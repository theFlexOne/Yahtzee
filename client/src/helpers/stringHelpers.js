export const capitalizeWord = (word) => word[0].toUpperCase() + word.slice(1);

export const capitalizeWords = (words) => {
  const wordsList = Array.isArray(words) ? [...words] : words.split(" ");
  wordsList.forEach((word, i, arr) => (arr[i] = capitalizeWord(word)));
  return wordsList;
};

export const titleizeString = (str) => {
  const titleizedWords = str
    .split(" ")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
  return titleizedWords;
};
