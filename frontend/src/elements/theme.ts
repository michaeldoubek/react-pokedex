export type Color = keyof typeof theme['colors'];
export type Size = keyof typeof theme['sizes'];
export type Elevation = keyof typeof theme['elevations'];
export type Breakpoint = keyof typeof theme['breakpoints'];

const theme = {
  colors: {
    green: '#209c3d',
    red: '#e0093e',
    purple: '#5a29aa',
    neutral_100: '#fff',
    neutral_200: '#ddd',
    neutral_400: '#777',
    neutral_700: '#333',
  },
  sizes: {
    0: '0',
    1: '.25rem',
    2: '.5rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
    24: '6rem',
    32: '8rem',
  },
  elevations: {
    '1x': '2px 2px 4px #00000010',
    '2x': '4px 4px 8px #00000020',
  },
  typography: {
    title: {size: '2rem', sizeFluid: 'clamp(.9rem, 4.5vw, 3rem)', weight: 700},
    subtitle: {
      size: '1.2rem',
      sizeFluid: 'clamp(.7rem, 2.5vw, 1.6rem)',
      weight: 700,
    },
    body: {size: '1rem', sizeFluid: 'clamp(.7rem, 1.9vw, 1.2rem)', weight: 400},
  },
  breakpoints: {
    sm: 750,
    md: 1280,
    lg: 1540,
  },
};

export default theme;
