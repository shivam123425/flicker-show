import { CSS } from "@stitches/react";
import React, { useRef, useState } from "react";
import { useImperativeHandle } from "react";
import { Box } from "./Box";
import { ErrorText } from "./ErrorText";
import { InputField } from "./InputField";
import { styled } from "./stitches.config";

interface Props extends React.ComponentProps<typeof InputField> {
  label: string;
  id: string;
  error?: string | boolean;
}

export const Input = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { label, block, id, error } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState(false);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
      setFocused(true);
    }
    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
      setFocused(false);
    }

    const value = inputRef.current?.value;
    const hasError = !!error;

    return (
      <Box
        css={{
          position: "relative",
          display: block ? "block" : "inline-block",
          height: "auto",
          color: "$grayMedium",
        }}
      >
        <InputFieldContainer hasError={hasError}>
          <InputField
            {...props}
            ref={inputRef}
            id={id}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <Box
            as="label"
            css={{
              fontSize: 16,
              position: "absolute",
              transition: "left 0.3s, top 0.3s, font-size 0.1s",
              ...getLabelPosition(focused || !!value),
            }}
            htmlFor={id}
          >
            {label}
          </Box>
        </InputFieldContainer>
        {hasError && <ErrorText>{error}</ErrorText>}
      </Box>
    );
  }
);

const InputFieldContainer = styled(Box, {
  position: "relative",
  variants: {
    hasError: {
      true: {
        "&::after": {
          content: "",
          borderBottom: "2px solid $secondary",
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 6,
          width: "100%",
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          pointerEvents: "none",
        },
      },
    },
  },
});

function getLabelPosition(active: boolean) {
  const styles: CSS = {
    top: "50%",
    left: 20,
    transform: "translateY(-50%)",
  };
  if (active) {
    styles.top = 5;
    styles.transform = "";
    styles.left = "20px";
    styles.fontSize = 11;
  }
  return styles;
}
