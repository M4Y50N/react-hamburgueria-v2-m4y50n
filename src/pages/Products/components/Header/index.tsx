import { useContext } from "react";
import kenzieburguer from "../../../../assets/imgs/kenzieburguer.png";
import { Container } from "../../../../assets/styles/Container";
import { Button } from "../../../../Components/Buttons";
import { UserContext } from "../../../../providers/UserContext";
import { StyledHeader } from "./styles";

export const Header = () => {
	const { userLogout } = useContext(UserContext);

	return (
		<StyledHeader>
			<Container>
				<img src={kenzieburguer} alt="kenzie burguer" />

				<Button ButtonSize="medium" onClick={userLogout}>
					Logout
				</Button>
			</Container>
		</StyledHeader>
	);
};
