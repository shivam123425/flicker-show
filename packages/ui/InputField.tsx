import { styled } from "./stitches.config";

export const InputField = styled("input", {
  "&[type=text],&[type=password],&[type=email]": {
    backgroundColor: "$grayDark",
    color: "$white",
    borderRadius: 4,
    position: "relative",
    padding: "16px 20px 8px",
    border: "none",
    height: 55,
    lineHeight: 50,
    fontSize: 16,
    outline: "none",
  },
  variants: {
    block: {
      true: {
        width: "100%",
        display: "block",
      },
    },
  },
});
