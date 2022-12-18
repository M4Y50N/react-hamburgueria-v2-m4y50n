import { useContext } from "react";
import { Button } from "../../Components/Buttons";
import { UserContext } from "../../providers/UserContext";

export const Products = () => {
	const { userLogout } = useContext(UserContext);

	return (
		<>
			Sou a pagina de produtos
			<Button ButtonSize="medium" onClick={userLogout}>
				Logout
			</Button>
		</>
	);
};
