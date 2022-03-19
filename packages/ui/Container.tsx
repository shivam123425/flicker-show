import { styled } from "./stitches.config";

export const Container = styled("div", {
  position: "relative",
  variants: {
    fullVWidth: {
      true: {
        width: "100vw",
      },
    },
    fullHeight: {
      true: {
        height: "100%",
      },
      fullVHeight: {
        true: {
          height: "100vh",
        },
      },
    },
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
