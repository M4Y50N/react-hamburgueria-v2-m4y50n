import styled, { css } from "styled-components";

interface iContainer {
	Alignment?: string;
	Height?: string;
}

export const Container = styled.div`
	padding: 1rem;
	width: 100%;
	max-width: 120rem;

	${({ Alignment, Height }: iContainer) => {
		return (
			Alignment === "center" &&
			css`
				height: ${Height};
				display: flex;
				align-items: center;
				justify-content: center;
			`
		);
	}}
`;
