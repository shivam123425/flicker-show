import { Box, Typography, Input, Button } from "ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Box
      css={{
        backgroundColor: "$dark",
        padding: "1.5rem",
        height: "100%",
        color: "$white",
      }}
    >
      <Typography gutterBottom>Sign In</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          block
          label="Email"
          id="email"
          error={errors.email?.message}
          {...register("email", { required: true })}
        />
        <Input
          type="password"
          block
          id="password"
          label="Password"
          css={{ marginTop: 16 }}
          error={errors.password?.message}
          {...register("password", { required: true })}
        />
        <Button color="primary" block type="submit" css={{ marginTop: 24 }}>
          Sign In
        </Button>
      </form>
    </Box>
  );
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter a valid email"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is required"),
});
