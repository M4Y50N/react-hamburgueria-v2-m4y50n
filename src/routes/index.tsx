import { Routes, Route } from "react-router-dom";

//Pages
import { Login } from "../pages/Login";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route path="*" element={<h1>404 Rota não encontrada</h1>} />
		</Routes>
	);
};
