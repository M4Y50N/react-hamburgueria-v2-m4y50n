import { UseFormRegisterReturn } from "react-hook-form";

import { StyledContainer } from "./styles";

interface iInput {
	id: string;
	type: string;
	placeholder: string;
	register: UseFormRegisterReturn;
	autoComplete?: string;
}

export const Input = ({
	id,
	type,
	placeholder,
	register,
	autoComplete,
}: iInput) => {
	return (
		<StyledContainer>
			<label htmlFor={id}>{placeholder}</label>
			<input type={type} id={id} {...register} autoComplete={autoComplete} />
		</StyledContainer>
	);
};
