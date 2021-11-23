export const getStateLocalStorage = () => {
  const tweetStorage = localStorage.getItem('tweets');
  if (tweetStorage == null) {
    return undefined;
  }

  return JSON.parse(tweetStorage);
};

export const setStateLocalStorage = (state) => {
  localStorage.setItem('tweets', JSON.stringify(state));
};
