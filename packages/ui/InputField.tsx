import { styled } from "./stitches.config";

export const InputField = styled("input", {
  "&[type=text],&[type=password]": {
    backgroundColor: "$grayDark",
    color: "$white",
    borderRadius: 4,
    position: "relative",
    paddingX: 20,
    paddingY: 16,
    border: "none",
    height: 50,
    lineHeight: 50,
    fontSize: 16,
    outline: "none",
  },
  variants: {
    block: {
      true: {
        width: "100%",
        display: "block",
        marginY: 12,
      },
    },
  },
});
