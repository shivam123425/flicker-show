import { InputField } from "./InputField";

interface Props extends React.ComponentProps<typeof InputField> {}

export function Input(props: Props) {
  return <InputField {...props} />;
}
