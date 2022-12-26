import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { H1 } from "../../assets/styles/Typography";
import { UserContext } from "../../providers/UserContext";

export const ProtectedRoutes = () => {
	const { user, loading } = useContext(UserContext);

	if (loading) {
		return <H1>Carregando...</H1>;
	}

	return user ? <Outlet /> : <Navigate to="/" />;
};
