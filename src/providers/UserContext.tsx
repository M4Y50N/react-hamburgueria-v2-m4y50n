import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

interface iUser {
	name?: string;
	email: string;
	password: string;
}
interface iUserProvider {
	children: React.ReactNode;
}

interface iFormLoginData {
	email: string;
	password: string;
}

interface iFormRegisterData {
	name: string;
	email: string;
	password: string;
}

interface iProducts {
	id: number;
	name: string;
	category: string;
	img: string;
}

interface iUserContext {
	user: iUser | null;
	products: iProducts[];
	userLogin: (formData: iFormLoginData) => void;
	userRegister: (formData: iFormRegisterData) => void;
	userLogout: () => void;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
	const [user, setUser] = useState<iUser | null>(null),
		[products, setProducts] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const loadUser = async () => {
			const token = localStorage.getItem("@TOKEN"),
				userData = JSON.parse(localStorage.getItem("@USER") as string) || null;

			if (!token) {
				return;
			}

			try {
				api.defaults.headers.common.authorization = `Bearer ${token}`;

				const response = await api.get("/products");

				const data = response.data;

				setProducts(data);
				setUser(userData);

				navigate("/products", { replace: true });
			} catch (error) {
				console.log(error);
				localStorage.clear();
			}
		};

		loadUser();
	}, [navigate]);

	const userLogin = async (data: iFormLoginData) => {
		try {
			const response = await api.post("login", data);

			const { accessToken, user: userData } = response.data;

			localStorage.setItem("@TOKEN", accessToken);
			localStorage.setItem("@USER", JSON.stringify(userData));

			setUser(userData);

			api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

			navigate("/products", { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	const userRegister = async (data: iFormRegisterData) => {
		try {
			const response = await api.post("users", data);

			const { accessToken, user: userData } = response.data;

			localStorage.setItem("@TOKEN", accessToken);
			localStorage.setItem("@USER", userData);

			setUser(userData);
		} catch (error) {
			console.log(error);
		}
	};

	const userLogout = () => {
		localStorage.clear();

		setUser(null);
		navigate("/");
	};

	return (
		<UserContext.Provider
			value={{ user, products, userLogin, userRegister, userLogout }}
		>
			{children}
		</UserContext.Provider>
	);
};
