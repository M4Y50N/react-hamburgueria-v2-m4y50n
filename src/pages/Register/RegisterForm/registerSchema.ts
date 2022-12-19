import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
	name: yup.string().required("O nome é obrigatório."),
	email: yup
		.string()
		.required("O email é obrigatório.")
		.email("Digite um email válido."),
	password: yup.string().required("A senha é obrigatória."),
	confirm_password: yup
		.string()
		.required("A confirmação da senha é obrigatória.")
		.oneOf([yup.ref("password")], "As senhas precisam ser iguais."),
});
