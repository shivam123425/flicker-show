import { styled } from "./stitches.config";

export const Box = styled("div", {
  variants: {
    perfectCenter: {
      true: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
  },
});
