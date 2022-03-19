import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#e50914",
      secondary: "#e87c03",
      grayLight: "#b3b3b3",
      grayMedium: "#8c8c8c",
      grayDark: "#333",
      white: "#fff",
      dark: "rgba(0,0,0,0.9)"
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: number) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: number) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: number) => ({ paddingTop: value, paddingBottom: value }),
    vWidth: (value: number) => ({ width: `${value}vw` }),
    vHeight: (value: number) => ({ width: `${value}vh` }),
  },
});
