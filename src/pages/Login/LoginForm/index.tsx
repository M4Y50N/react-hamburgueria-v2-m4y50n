import { Button } from "../../../Components/Buttons";
import { StyledForm } from "../../../assets/styles/Form/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../Components/Input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";

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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		mode: "onChange",
		resolver: yupResolver(loginSchema),
	});

	const submit: SubmitHandler<iFormLoginData> = (data) => {
		userLogin(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(submit)}>
			<Input
				id="email"
				type="text"
				placeholder="Email"
				error={errors.email}
				register={register("email")}
			/>
			<Input
				id="password"
				type="password"
				placeholder="Senha"
				error={errors.password}
				register={register("password")}
				autoComplete="on"
			/>
			<Button>Entrar</Button>
		</StyledForm>
	);
};
