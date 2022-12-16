import { StyledButton } from "./styles";

interface iButton {
	ButtonSize?: string;
	ButtonBackground?: string;
	children: string;
}

export const Button = ({ ButtonSize, ButtonBackground, children }: iButton) => {
	return (
		<StyledButton ButtonSize={ButtonSize} ButtonBackground={ButtonBackground}>
			{children}
		</StyledButton>
	);
};
