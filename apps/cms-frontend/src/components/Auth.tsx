import { Box, Typography, Input, Button } from "ui";

export function Auth() {
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
      <form>
        <Input type="email" block name="email" label="Email" id="email" />
        <Input
          type="password"
          block
          id="password"
          name="password"
          label="Password"
          css={{ marginBottom: 16 }}
        />
        <Button color="primary" block type="submit" css={{ marginTop: 24 }}>
          Sign In
        </Button>
      </form>
    </Box>
  );
}
