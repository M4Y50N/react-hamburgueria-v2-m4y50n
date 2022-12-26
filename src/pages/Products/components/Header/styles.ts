import styled from "styled-components";
import { leftAppear } from "../../../../assets/styles/Animations";

export const StyledHeader = styled.header`
	position: relative;

	padding: 0 1rem;
	box-shadow: 0 0 0.5rem var(--color-tertiary);

	> div:last-child {
		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		.actions {
			display: flex;
			align-items: center;
			column-gap: 2rem;

			.search_box {
				input {
					display: none;
				}

				button {
					cursor: pointer;

					img {
						width: 2rem;

						filter: invert(57%) sepia(94%) saturate(1400%) hue-rotate(336deg)
							brightness(101%) contrast(101%);
					}

					:hover {
						filter: brightness(1.3);
					}
				}
			}

			button {
				padding: 0;
				background-color: transparent;

				:hover {
					filter: brightness(1.3);
				}

				:nth-child(2) {
					position: relative;

					span {
						position: absolute;
						top: -16px;
						right: -7px;

						padding: 0.3rem 0.4rem;

						background-color: var(--color-tertiary);
						border-radius: var(--radius);

						transition: all 0.2s ease;
					}

					&:hover span {
						top: -17px;
					}
				}
			}

			@media (min-width: 561px) {
				.search_box {
					padding: 0.5rem;

					display: flex;
					align-items: center;
					column-gap: 1rem;

					border: 0.2rem solid var(--color-gray-300);
					background-color: var(--color-tertiary-transparent);
					border-radius: var(--radius);

					input {
						font-size: 1.7rem;

						padding: 0.5rem 1rem;

						display: flex;

						outline: none;
						border: none;
						background-color: transparent;
					}

					button {
						cursor: auto;
						pointer-events: none;

						padding: 1rem 1.5rem;

						background-color: var(--color-secondary);
						border-radius: var(--radius);

						img {
							width: 1.7rem;
							filter: none;
						}
					}
				}
			}
		}

		> img {
			width: 100px;
		}
	}

	.maximized {
		width: 100%;
		height: 100px;

		display: flex;
		align-items: center;
		justify-content: center;

		animation: ${leftAppear} 0.3s ease;

		> div {
			padding: 0.5rem;
			width: 100%;

			display: flex;
			justify-content: space-between;
			column-gap: 1rem;

			border: 0.2rem solid var(--color-gray-300);
			background-color: var(--color-tertiary-transparent);
			border-radius: var(--radius);

			input {
				font-size: 1.7rem;

				padding: 0.5rem 1rem;

				outline: none;
				border: none;
				background-color: transparent;
			}

			button {
				padding: 1rem 1.5rem;

				background-color: var(--color-secondary);
				border-radius: var(--radius);

				img {
					width: 1.7rem;
					filter: none;
				}
			}
		}
	}
`;
