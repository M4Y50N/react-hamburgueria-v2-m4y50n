import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
	padding: 1.7rem;
	text-align: center;
	color: var(--color-background);
	font-weight: var(--fw-bold);
	background-color: var(--color-gray-300);
	border-radius: var(--radius);

	transition: all 0.3s ease;

	:hover {
		filter: brightness(1.1);
		background-color: var(--color-gray-600);
	}
`;
