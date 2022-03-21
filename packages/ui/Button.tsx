import { styled } from "./stitches.config";

export const Button = styled("button", {
  outline: "none",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: 16,
  padding: 16,
  fontWeight: 700,
  textAlign: "center",
  fontFamily: "inherit",
  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
        color: "$white",
      },
    },
    block: {
      true: {
        display: "block",
        marginY: 12,
        width: "100%",
      },
    },
  },
  "@sm": {
    padding: 10,
  },
});
