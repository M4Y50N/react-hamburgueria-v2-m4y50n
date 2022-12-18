import styled, { css } from "styled-components";

interface iContainer {
	Alignment?: string;
}

export const Container = styled.div`
	padding: 1rem;
	width: 100%;
	max-width: 120rem;

	${({ Alignment }: iContainer) => {
		return (
			Alignment === "center" &&
			css`
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			`
		);
	}}
`;
