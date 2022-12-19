import { Button } from "../../../Components/Buttons";
import { StyledForm } from "../../../assets/styles/Form/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../../Components/Input";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./registerSchema";

interface iFormRegisterData {
	name: string;
	email: string;
	password: string;
	confirm_password: string;
}

export const RegisterForm = () => {
	const { userRegister } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iFormRegisterData>({
		mode: "onChange",
		resolver: yupResolver(RegisterSchema),
	});

	const submit: SubmitHandler<iFormRegisterData> = (data) => {
		userRegister(data);
	};

	return (
		<StyledForm onSubmit={handleSubmit(submit)}>
			<Input
				id="name"
				type="text"
				placeholder="Nome"
				error={errors.name}
				register={register("name")}
			/>
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
			<Input
				id="confirm_password"
				type="password"
				placeholder="Confirmar Senha"
				error={errors.confirm_password}
				register={register("confirm_password")}
				autoComplete="on"
			/>
			<Button>Cadastro</Button>
		</StyledForm>
	);
};
