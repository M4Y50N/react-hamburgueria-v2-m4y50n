import { StyledButton } from "./styles";

interface iButton {
	ButtonSize?: string;
	ButtonBackground?: string;
	children: string;
}

export const Button: React.FC<iButton> = ({
	ButtonSize,
	ButtonBackground,
	children,
}) => {
	return (
		<StyledButton ButtonSize={ButtonSize} ButtonBackground={ButtonBackground}>
			{children}
		</StyledButton>
	);
};
