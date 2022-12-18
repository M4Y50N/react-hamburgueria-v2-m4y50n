import { Button } from "../../../Components/Buttons";
import { StyledForm } from "../../../assets/styles/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../Components/Input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

interface FormData {
	email: string;
	password: string;
}

interface iFormLoginData {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const { userLogin } = useContext(UserContext);

	const { register, handleSubmit } = useForm<FormData>();

	const submit: SubmitHandler<iFormLoginData> = (data) => {
		userLogin(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(submit)}>
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
			<Button>Entrar</Button>
		</StyledForm>
	);
};
