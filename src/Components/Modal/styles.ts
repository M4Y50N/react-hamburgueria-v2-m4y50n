import styled from "styled-components";

export const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	padding-top: 10rem;

	background-color: #33333355;

	.modal {
		margin: 0 auto;

		width: 100%;
		max-width: 450px;
		height: fit-content;

		background-color: var(--color-gray-0);
		box-shadow: 0 0 5px var(--color-gray-300);
		border-radius: var(--radius);

		.cart_title {
			padding: 1.2rem;

			width: 100%;

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

			max-height: 350px;

			display: flex;
			flex-direction: column;
			row-gap: 1rem;

			overflow-y: auto;

			p {
				color: var(--color-gray-300);
			}

			.empty {
				padding: 5rem 0;
			}
		}
	}
`;
