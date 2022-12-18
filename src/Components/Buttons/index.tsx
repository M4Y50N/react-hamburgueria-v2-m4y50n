import { StyledButton } from "./styles";

interface iButton {
	ButtonSize?: string;
	ButtonBackground?: string;
	children: string;
	onClick?: () => void;
}

export const Button = ({
	ButtonSize,
	ButtonBackground,
	children,
	onClick,
}: iButton) => {
	return (
		<StyledButton
			ButtonSize={ButtonSize}
			ButtonBackground={ButtonBackground}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};
