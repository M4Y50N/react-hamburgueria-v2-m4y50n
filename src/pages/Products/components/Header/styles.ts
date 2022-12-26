import styled from "styled-components";

export const StyledHeader = styled.header`
	padding: 0 1rem;
	box-shadow: 0 0 0.5rem var(--color-tertiary);

	> div:last-child {
		margin: 0 auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		.buttons {
			display: flex;
			align-items: center;
			column-gap: 2rem;

			button {
				padding: 0;
				background-color: transparent;

				:hover {
					filter: brightness(1.3);
				}

				:first-child {
					position: relative;

					span {
						position: absolute;
						top: -17px;
						right: -7px;

						padding: 0.3rem 0.4rem;

						background-color: var(--color-tertiary);

						border-radius: var(--radius);
					}
				}
			}
		}

		> img {
			width: 100px;
		}
	}
`;
