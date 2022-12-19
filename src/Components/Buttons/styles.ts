import styled, { css } from "styled-components";

type iButtonInfo = {
	ButtonSize?: string;
	ButtonBackground?: string;
};

export const StyledButton = styled.button`
	padding: 1.7rem;
	color: var(--color-background);
	font-weight: var(--fw-bold);
	background-color: var(--color-secondary);
	border-radius: var(--radius);

	transition: all 0.3s ease;

	&:hover {
		filter: brightness(1.1);
	}

	${({ ButtonSize }: iButtonInfo) => {
		return (
			ButtonSize === "medium" &&
			css`
				padding: 1rem 1.5rem;
				height: fit-content;
			`
		);
	}}

	${({ ButtonBackground }: iButtonInfo) => {
		return (
			ButtonBackground === "gray" &&
			css`
				background-color: var(--color-gray-300);

				&:hover {
					background-color: var(--color-gray-600);
				}
			`
		);
	}}
`;
