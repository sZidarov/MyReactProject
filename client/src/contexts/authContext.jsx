import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";
import Path from "../paths";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({
    // This is a component that helps to outsource state and handlers to a outside file and that way they are not in the App component
    children, // children is existing property of every react component. Every child of the component will be attached to this property by default
}) => {
    const navigate = useNavigate();

    const [auth, setAuth] = usePersistedState("auth", {});

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(
                values.email,
                values.password
            );

            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);

            navigate(Path.Home);
        } catch (error) {
            alert(error.message);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(
                values.email,
                values.password
            );
            setAuth(result);
            localStorage.setItem("accessToken", result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            alert(error.message);
        }
    };

    const logoutHandler = async () => {
        try {
            setAuth({});
            localStorage.removeItem("accessToken");
        } catch (error) {
            alert(error.message);
        }
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email, // This means if you dont have username then use email instead
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken, //  "!!" can be used to convert falsy or thruthy values to boolean values. For example: undefined -> false
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
