import { StyledModal } from "./styles";

interface iModal {
	children: React.ReactNode;
}

export const Modal = ({ children }: iModal) => {
	return <StyledModal>{children}</StyledModal>;
};
