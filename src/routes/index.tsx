import { Routes, Route } from "react-router-dom";

//Pages
import { Login } from "../pages/Login";
import { Products } from "../pages/Products";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			{/* <Route path="/register" element={<Register />} /> */}
			<Route element={<ProtectedRoutes />}>
				<Route path="/products" element={<Products />} />
			</Route>
			<Route path="*" element={<h1>404 Rota não encontrada</h1>} />
		</Routes>
	);
};
