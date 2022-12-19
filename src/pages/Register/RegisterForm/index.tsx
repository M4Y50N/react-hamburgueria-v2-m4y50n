import { Button } from "../../../Components/Buttons";
import { StyledForm } from "../../../assets/styles/Form/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../Components/Input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

interface iFormRegisterData {
	name: string;
	email: string;
	password: string;
	confirm_password: string;
}

export const RegisterForm = () => {
	const { userRegister } = useContext(UserContext);

	const { register, handleSubmit } = useForm<iFormRegisterData>();

	const submit: SubmitHandler<iFormRegisterData> = (data) => {
		userRegister(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(submit)}>
			<Input
				id="name"
				type="text"
				placeholder="Nome"
				register={register("name")}
			/>
			<Input
				id="email"
				type="text"
				placeholder="Email"
				register={register("email")}
			/>

			<Input
				id="password"
				type="password"
				placeholder="Senha"
				register={register("password")}
				autoComplete="on"
			/>
			<Input
				id="confirm_password"
				type="password"
				placeholder="Confirmar Senha"
				register={register("confirm_password")}
				autoComplete="on"
			/>
			<Button>Entrar</Button>
		</StyledForm>
	);
};
