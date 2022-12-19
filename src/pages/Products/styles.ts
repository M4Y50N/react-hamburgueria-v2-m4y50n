import styled from "styled-components";

export const StyledProducts = styled.ul`
	padding: 5rem 0;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	column-gap: 2rem;
	row-gap: 4rem;
`;

export const StyledProduct = styled.li`
	width: 100%;
	max-width: 300px;

	display: flex;
	flex-direction: column;

	border-radius: var(--radius);
	box-shadow: 0 0 5px var(--color-tertiary);

	transition: all 0.3s ease;

	:hover {
		transform: translateY(-1rem);
		box-shadow: 0 0 0.5rem var(--color-secondary);
	}

	.product_head {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 15rem;

		background-color: var(--color-tertiary-transparent);
	}

	.product_body {
		padding: 2rem;

		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	.product_footer {
		padding: 0 2rem 2rem;

		display: flex;
		flex-direction: column;
		row-gap: 2rem;

		> button {
			width: fit-content;
		}
	}
`;
