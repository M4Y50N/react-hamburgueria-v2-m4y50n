import { Container } from "../../assets/styles/Container";
import { H1, H3 } from "../../assets/styles/Typography";
import { LoginForm } from "./LoginForm";

import { StyledFormHead } from "../../assets/styles/Form/FormHead/styles";

import kenzieburguer from "../../assets/imgs/kenzieburguer500x500.png";
import bagicon from "../../assets/imgs/bagicon.svg";
import { StyledFormPage } from "../../assets/styles/Form/FormPage/styles";
import { StyledFormContainer } from "../../assets/styles/Form/FormContainer/styles";
import { StyledLink } from "../../assets/styles/Link";

export const Login = () => {
	return (
		<Container Alignment="center">
			<StyledFormPage>
				<StyledFormHead>
					<H1 Color="var(--color-primary)">
						Burguer <span>Kenzie</span>
					</H1>
					<div>
						<div>
							<img src={bagicon} alt="bag icon" />
						</div>
						<p>
							A vida é como um sanduíche, é preciso recheá-la com os melhores
							ingredientes
						</p>
					</div>
					<img width="100%" src={kenzieburguer} alt="kenzie burguer" />
				</StyledFormHead>

				<StyledFormContainer>
					<H3>Login</H3>

					<LoginForm />

					<p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

					<StyledLink to="/register">Cadastrar</StyledLink>
				</StyledFormContainer>
			</StyledFormPage>
		</Container>
	);
};
