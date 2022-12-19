import styled from "styled-components";

export const StyledFormHead = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 43rem;

	h1 {
		margin-bottom: 2rem;
	}

	& > div {
		padding: 1rem;
		width: fit-content;
		display: flex;
		align-items: center;

		column-gap: 1rem;
		box-shadow: 0 0 5px var(--color-tertiary);
		border-radius: var(--radius);

		& > div {
			width: 45px;
			height: 45px;
			background: linear-gradient(#ff823355, #ff823355);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: var(--radius);
		}

		& > p {
			width: 30ch;
		}
	}
`;
