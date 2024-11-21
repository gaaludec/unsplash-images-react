export const getInitialTheme = () => {
  const preferredTheme = window.matchMedia('prefers-color-scheme:dark').matches;
  const storedTheme = localStorage.getItem('darkTheme');

  if (storedTheme === null) {
    return preferredTheme;
  }

  return storedTheme === 'true';
};
