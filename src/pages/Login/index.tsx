import { Container } from "../../assets/styles/Container";
import { H1, H3 } from "../../assets/styles/Typography";
import { Button } from "../../Components/Buttons";
import { LoginForm } from "./LoginForm";
import { StyledFormContainer } from "./LoginForm/styles";
import { StyledFormHead, StyledLoginPage } from "./styles";

export const Login = () => {
	return (
		<Container Alignment="center">
			<StyledLoginPage>
				<StyledFormHead>
					<H1 Color="var(--color-primary)">
						Burguer <span>Kenzie</span>
					</H1>
				</StyledFormHead>
				<StyledFormContainer>
					<H3>Login</H3>

					<LoginForm />

					<p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

					<Button ButtonBackground="gray">Cadastrar</Button>
				</StyledFormContainer>
			</StyledLoginPage>
		</Container>
	);
};
