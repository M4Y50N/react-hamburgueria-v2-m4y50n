import styled from "styled-components";

export const StyledHeader = styled.header`
	padding: 0 1rem;
	box-shadow: 0 0 0.5rem var(--color-tertiary);

	div {
		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		img {
			width: 100px;
		}
	}
`;
