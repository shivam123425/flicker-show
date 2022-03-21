import { CSS } from "@stitches/react";
import React, { useRef, useState } from "react";
import { Box } from "./Box";
import { InputField } from "./InputField";

interface Props extends React.ComponentProps<typeof InputField> {
  label: string;
  id: string;
}

export function Input(props: Props) {
  const { label, block, id } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);

  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    setFocused(true);
  }
  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setFocused(false);
  }

  const value = ref.current?.value;

  return (
    <Box
      css={{
        position: "relative",
        display: block ? "block" : "inline-block",
        height: "auto",
        color: "$grayMedium",
      }}
    >
      <InputField
        {...props}
        ref={ref}
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
    </Box>
  );
}

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
