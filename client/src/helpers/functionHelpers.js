const xTimesGather = (x, fn, args = []) => {
  const collection = [];
  for (let i = 0; i < x; i++) {
    collection.push(fn(...args));
  }
  return collection;
};

const xTimesDo = (x, fn, args = []) => {
  for (let i = 0; i < x; i++) {
    fn(...args);
  }
};
