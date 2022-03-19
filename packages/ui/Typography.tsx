import { styled } from "./stitches.config";

export const Typography = styled("h1", {
  fontFamily: "inherit",
  fontSize: "32px",
  fontWeight: 700,
  variants: {
    gutterBottom: {
      true: {
        marginBottom: 28,
      },
    },
  },
});
