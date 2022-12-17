import styled, { css } from "styled-components";

type iButtonInfo = {
	ButtonSize?: string;
	ButtonBackground?: string;
};

export const StyledButton = styled.button`
	padding: 3rem;
	color: var(--color-gray-0);
	background-color: var(--color-primary);
	border-radius: var(--radius-2);

	transition: all 0.3s ease;

	&:hover {
		filter: brightness(1.1);
	}

	${({ ButtonSize }: iButtonInfo) => {
		return (
			ButtonSize === "medium" &&
			css`
				padding: 1rem;
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
