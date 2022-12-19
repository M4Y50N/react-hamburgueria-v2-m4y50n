import styled, { css } from "styled-components";

interface iContainer {
	Alignment?: string;
	Color?: string;
	BoxShadow?: string;
}

export const Container = styled.div`
	margin: 0 auto;
	padding: 1rem;
	width: 100%;
	max-width: 120rem;

	${({ Alignment }: iContainer) => {
		return (
			Alignment === "center" &&
			css`
				display: flex;
				align-items: center;
				justify-content: center;
			`
		);
	}}

	${({ Color, BoxShadow }: iContainer) => {
		return css`
			color: ${Color};
			box-shadow: ${BoxShadow};
		`;
	}}

	@media (min-width: 880px) {
		height: 100%;
	}
`;
