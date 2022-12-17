import { createContext } from "react";
import { api } from "../api/api";

interface iUserProvider {
	children: React.ReactNode;
}

interface iData {
	email: string;
	password: string;
}

interface iUserContext {
	userLogin: (formData: iData) => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
	const userLogin = async (data: iData) => {
		try {
			const response = await api.post("login", data);

			const { accessToken, user } = response.data;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<UserContext.Provider value={{ userLogin }}>
			{children}
		</UserContext.Provider>
	);
};
