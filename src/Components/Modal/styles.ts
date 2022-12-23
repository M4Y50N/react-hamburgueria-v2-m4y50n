import styled from "styled-components";

export const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	padding-top: 10rem;

	width: 100%;
	height: 100%;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	background-color: #33333355;

	.modal {
		width: 100%;
		max-width: 350px;
		height: fit-content;
		background-color: var(--color-gray-0);
		border-radius: var(--radius);

		.cart_title {
			padding: 1.2rem;

			display: flex;
			align-items: center;
			justify-content: space-between;

			background-color: var(--color-secondary);
			border-radius: var(--radius) var(--radius) 0 0;

			button {
				color: var(--color-gray-100);
			}
		}

		.cart_body {
			text-align: center;
			padding: 5rem 0;

			display: flex;
			flex-direction: column;
			row-gap: 1rem;

			p {
				color: var(--color-gray-300);
			}
		}
	}
`;
