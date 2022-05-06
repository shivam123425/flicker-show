import { Container } from "ui";
import { Login as LoginComponent } from "ui";

export default function Login() {
  return (
    <Container fullHeight>
      <Container
        perfectCenter
        css={{
          width: "450px",
          height: "660px",
          "@sm": {
            width: "100vw",
            height: "100vh",
          },
        }}
      >
        <LoginComponent />
      </Container>
    </Container>
  );
}
