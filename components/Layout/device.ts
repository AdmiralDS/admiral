export const size = {
  smartphone: '460px',
  laptop: '768px',
  laptopL: '1280px',
  desktop: '1600px',
};

export const device = {
  smartphone: `(max-width: ${size.smartphone})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
