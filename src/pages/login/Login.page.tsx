import { Container } from "@mui/material";
import { LoginForm } from "@/pages/login/form/LoginForm";
import useStyle from "./Login.styles";

const LoginPage = () => {
  const sx = useStyle();
  return (
    <Container sx={sx.container}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
