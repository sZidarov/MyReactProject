import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/authContext";


export default function AdminGuard(props) {
    const { isAuthenticated, email } = useContext(AuthContext);

    if (!isAuthenticated || email !== 'admin@abv.bg') {
        return <Navigate to="/" />;
    }

    return <Outlet /> // Outlet is the way to tell the Router where to show the nested element  

}
