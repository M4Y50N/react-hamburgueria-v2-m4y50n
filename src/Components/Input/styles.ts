import styled from "styled-components";

export const StyledContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	& > label {
		position: absolute;
		top: -10px;
		left: 10px;

		padding: 0 0.7rem;

		background-color: var(--color-gray-0);
	}

	& > input {
		outline: none;
		padding: 2rem 1rem;

		background-color: var(--color-gray-0);
		border: 1px solid var(--color-tertiary);

		border-radius: var(--radius);

		transition: all 0.3s ease;
	}

	& > input:focus {
		outline: 1px solid var(--color-tertiary);
	}
`;
