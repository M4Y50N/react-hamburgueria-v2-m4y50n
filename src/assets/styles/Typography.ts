import styled from "styled-components";

interface iStyles {
	Color?: string;
}

export const H1 = styled.h1`
	color: ${({ Color }: iStyles) => Color};
	font-size: var(--fz-heading-1);
	font-weight: var(--fw-bold);

	& > span {
		color: var(--color-secondary);
		font-size: var(--fz-heading-3);
	}
`;

export const H2 = styled.h2`
	font-size: var(--fz-heading-2);
	font-weight: var(--fw-bold);
`;

export const H3 = styled.h3`
	font-size: var(--fz-heading-3);
	font-weight: var(--fw-bold);
	color: ${({ Color }: iStyles) => Color};
`;

export const Headline = styled.p`
	font-size: var(--fz-headline);
	font-weight: var(--fw-regular);
`;

export const Caption = styled.p`
	font-size: var(--fz-caption);
	font-weight: var(--fw-regular);
`;
