import { createStitches } from '@stitches/core';

export const { css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: number | string) => ({ marginLeft: value, marginRight: value }),
  },
});
