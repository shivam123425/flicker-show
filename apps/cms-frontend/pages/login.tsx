import { Auth } from "@components/Auth";
import { Container } from "ui";

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
            height: "100vh"
          }
        }}
      >
        <Auth />
      </Container>
    </Container>
  );
}
