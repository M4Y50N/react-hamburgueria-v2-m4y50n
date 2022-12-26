import styled from "styled-components";

export const StyledCartList = styled.ul`
	padding: 2rem 1rem;

	display: flex;
	flex-direction: column;

	row-gap: 2rem;

	li {
		position: relative;

		display: flex;
		align-items: center;
		column-gap: 2rem;

		.cart_product_head {
			width: 100px;
			height: 80px;

			background-color: var(--color-tertiary-transparent);
			border-radius: var(--radius);

			img {
				max-width: 80px;
			}
		}

		.cart_product_body {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			row-gap: 0.5rem;

			.product_count {
				display: flex;
				align-items: center;
				column-gap: 0.7rem;

				background-color: var(--color-background);
				border-radius: 0.5rem;

				p {
					padding: 0 0.5rem;

					font-weight: bolder;

					color: var(--color-tertiary);
				}

				button {
					padding: 0.3rem 0.7rem;

					font-weight: bold;

					color: var(--color-tertiary);
					background-color: var(--color-primary);

					transition: all 0.3s ease;

					:first-child {
						border-radius: 0.5rem 0 0 0.5rem;
					}

					:last-child {
						border-radius: 0 0.5rem 0.5rem 0;
					}

					:hover {
						filter: brightness(1.3);
					}
				}
			}
		}

		> button {
			position: absolute;
			/* top: 15px; */
			right: 0;

			padding: 0.7rem;

			display: flex;
			align-items: center;
			justify-content: center;

			background-color: transparent;
		}
	}
`;

export const StyledTotal = styled.div`
	padding: 2rem;

	display: flex;
	flex-direction: column;

	.total {
		padding: 2rem 0.7rem;

		display: flex;
		justify-content: space-between;

		border-top: 0.2rem solid var(--color-gray-100);

		p {
			font-weight: 600;

			:first-child {
				color: var(--color-gray-600);
			}
		}
	}
`;
